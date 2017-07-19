const Shell = require('child_process');
const path = require('path');

exports.onCreateNode = function ({ node, boundActionCreators, getNode }) {
	const { createNodeField } = boundActionCreators
	let slug
	if (node.internal.type === `MarkdownRemark`) {
		const fileNode = getNode(node.parent)
		const parsedFilePath = path.parse(fileNode.relativePath)
		if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
			slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
		} else if (parsedFilePath.dir === ``) {
			slug = `/${parsedFilePath.name}/`
		} else {
			slug = `/${parsedFilePath.dir}/`
		}

		// Add slug as a field on the node.
		createNodeField({ node, name: `slug`, value: slug })
	}
}

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators

	return new Promise((resolve, reject) => {
		const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
		// Query for markdown nodes to use in creating pages.
		resolve(
			graphql(
				`
			{
				allMarkdownRemark(limit: 1000) {
					edges {
						node {
							frontmatter {
								path
							}
						}
					}
				}
			}
		`
			).then(result => {
				if (result.errors) {
					reject(result.errors)
				}

				// Create pages for each markdown file.
				result.data.allMarkdownRemark.edges.forEach(({ node }) => {
					const path = node.frontmatter.path;
					createPage({
						path,
						component: blogPostTemplate,
						// In your blog post template's graphql query, you can use path
						// as a GraphQL variable to query for data from the markdown file.
						context: {
							path,
						}
					})
				})
			})
		)
	})
}


// Copy redirects on build
exports.onPostBuild = function() {
	Shell.execSync('cp src/_redirects public');
	Shell.execSync('cp src/_headers public');
	Shell.execSync('cp src/manifest.json public');
	Shell.execSync('cp -R src/images/icons public/icons');
}
