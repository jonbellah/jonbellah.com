const path = require("path")

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