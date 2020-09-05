const Shell = require('child_process');
const path = require('path');

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        pages: path.resolve(__dirname, 'src/pages'),
        layouts: path.resolve(__dirname, 'src/layouts'),
        assets: path.resolve(__dirname, 'src/assets'),
        lib: path.resolve(__dirname, 'src/lib'),
      },
    },
  });
};

exports.onCreateNode = function ({ node, actions, getNode }) {
  const { createNodeField } = actions;

  let slug;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === '') {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }

    // Add slug as a field on the node.
    createNodeField({ node, name: 'slug', value: slug });
  }
};

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/BlogPost/index.tsx');
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
        `,
      ).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create pages for each markdown file.
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          const path = node.frontmatter.path;
          createPage({
            path,
            component: blogPostTemplate,
          });
        });

        const posts = result.data.allMarkdownRemark.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/articles` : `/articles/${i + 1}`,
            component: path.resolve('src/templates/BlogList/index.tsx'),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          });
        });
      }),
    );
  });
};

// Copy redirects on build
exports.onPostBuild = function () {
  Shell.execSync('cp src/_redirects public');
  Shell.execSync('cp src/_headers public');
};
