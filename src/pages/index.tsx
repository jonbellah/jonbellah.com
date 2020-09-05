import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import ArticleCard from 'components/ArticleCard';
import Button from 'components/Button';
import Hero from 'components/Hero';
import Products from 'components/Products';
import { BlogPostNode } from 'lib/types';

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            excerpt
            title
            date
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
    withoutLimit: allMarkdownRemark {
      totalCount
    }
  }
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: BlogPostNode[];
    };
    withoutLimit: {
      totalCount: number;
    };
  };
}

const Index: React.FC<Props> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
console.log(data);
  return (
    <div>
      <Helmet
        title="JonBellah.com"
        meta={[
          {
            name: 'description',
            content:
              'Jon is a front-end web developer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.',
          },
        ]}
      />
      <Hero />
      <Products />
      <div className="bg-white pb-24 px-4 pt-8 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
        <div className="relative max-w-5xl mx-auto lg:max-w-7xl px-4 py-6 sm:px-6">
          <div>
            <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-center text-gray-900 sm:text-4xl sm:leading-10">
              Recent Articles
            </h2>
          </div>
          <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
            {posts.map((post) => (
              <ArticleCard key={post.node.frontmatter.path} {...post.node} />
            ))}
          </div>
          <div className="text-center pt-16">
            <Link to="/articles">
              <Button variant="secondary">Read more &rarr;</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
