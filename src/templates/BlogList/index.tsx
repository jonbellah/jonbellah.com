import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ArticlePreview from 'components/ArticlePreview';
import PageHeader from 'components/PageHeader';
import Pagination from 'components/Pagination';
import { BlogPostNode, PaginationContext } from 'lib/types';

export const pageQuery = graphql`
  query BlogQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
            date
            excerpt
            category {
              label
              slug
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: BlogPostNode[];
    };
  };
  pageContext: PaginationContext;
}

const Article: React.FC<Props> = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;

  const postList = posts
    .sort(
      (a, b) =>
        new Date(b.node.frontmatter.date).getTime() -
        new Date(a.node.frontmatter.date).getTime(),
    )
    .map((post) => (
      <ArticlePreview key={post.node.frontmatter.path} {...post.node} />
    ));

  return (
    <div className="pb-24 p-4">
      <Helmet
        title="Articles | JonBellah.com"
        meta={[
          {
            name: 'description',
            content: 'Jon Bellah on all things front-end web development',
          },
        ]}
      />

      <div className="prose prose-lg text-gray-500 mx-auto text-center">
        <PageHeader>Articles</PageHeader>
      </div>

      <div className="max-w-3xl text-gray-500 mx-auto">
        {postList}
      </div>

      <Pagination pageContext={pageContext} />
    </div>
  );
};

export default Article;
