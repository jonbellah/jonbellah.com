import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import ArticlePreview from 'components/ArticlePreview';
import PageHeader from 'components/PageHeader';
import { BlogPostNode } from 'lib/types';

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
            date
            excerpt
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
}

const Article: React.FC<Props> = ({ data }) => {
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
    <div className="pb-24">
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

      <div className="max-w-3xl text-gray-500 mx-auto pb-24">{postList}</div>
    </div>
  );
};

export default Article;
