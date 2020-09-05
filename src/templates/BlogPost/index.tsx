import React from 'react';
import Helmet from 'react-helmet';
import dayjs from 'dayjs';
import { graphql, Link } from 'gatsby';

import Bio from 'components/Bio';
import Button from 'components/Button';
import Pill from 'components/Pill';
import { BlogPost, CategoryColors } from 'lib/types';
import { getCategoryColor } from 'lib/utils';

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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
`;

interface Props {
  data: {
    markdownRemark: BlogPost;
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

const BlogPostTemplate: React.FC<Props> = ({ data }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <article className="pb-24">
      <Helmet
        title={`${post.frontmatter.title} | ${siteTitle}`}
        meta={[{ name: 'description', content: `${post.frontmatter.excerpt}` }]}
      />

      <div className="relative py-16 bg-white overflow-hidden max-w-5xl mx-auto">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto pb-12 text-center">
            <Pill
              color={
                getCategoryColor(
                  post.frontmatter.category?.slug,
                ) as CategoryColors
              }
            >
              {post.frontmatter.category.label}
            </Pill>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {post.frontmatter.title}
            </h1>
            <div className="text-gray-400 text-md leading-tight pb-6">
              <time dateTime="2020-03-16">
                {dayjs(post.frontmatter.date).format('MMM D, YYYY')}
              </time>
              <span className="mx-1">&middot;</span>
              <span>{post.fields?.readingTime?.text}</span>
            </div>
          </div>
          <div
            className="prose prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>

      <Bio />
      <div className="text-center pt-24">
        <Link to="/articles">
          <Button variant="secondary">&larr; Back to articles</Button>
        </Link>
      </div>
    </article>
  );
};

export default BlogPostTemplate;
