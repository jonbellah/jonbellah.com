import React from 'react';
import Helmet from 'react-helmet';
import dayjs from 'dayjs';
import { graphql } from 'gatsby';

import Bio from 'components/Bio';
import { BlogPost } from 'lib/types';

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
  const date = new Date(post.frontmatter.date);

  return (
    <article className="pb-24">
      <Helmet
        title={`${post.frontmatter.title} | ${siteTitle}`}
        meta={[{ name: 'description', content: `${post.frontmatter.excerpt}` }]}
      />

      <div className="relative py-16 bg-white overflow-hidden max-w-5xl mx-auto">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto pb-12 text-center">
            <p className="text-base text-center leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
              category
            </p>
            <h1 className="mt-2 mb-8 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              {post.frontmatter.title}
            </h1>
            <time className="text-gray-500 text-md">{dayjs(date).format('MMMM D, YYYY')}</time>
          </div>
          <div
            className="prose prose-lg text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </div>

      <Bio />
    </article>
  );
};

export default BlogPostTemplate;
