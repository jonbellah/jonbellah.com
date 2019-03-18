import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Bio from '../components/Bio';
import Comments from '../components/Comments';
import Subscribe from '../components/Subscribe';
import { getProp } from '../utils/helpers';

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark;
  const siteTitle = getProp(props, 'data.site.siteMetadata.title');
  const date = new Date(post.frontmatter.date);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <article className="post">
      <Helmet
        title={`${post.frontmatter.title} | ${siteTitle}`}
        meta={[{ name: 'description', content: `${post.frontmatter.excerpt}` }]}
      />

      <header className="post__header container">
        <h1 className="post__title">{post.frontmatter.title}</h1>
        <p className="post__meta">
          Posted on
          <time className="post__time">
            {`${date.getDate()} ${
              months[date.getMonth()]
            } ${date.getFullYear()}`}
          </time>
        </p>
      </header>

      <div
        className="post__content container--narrow"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <Bio />
      <Subscribe />
      <Comments />
    </article>
  );
};

export default BlogPostTemplate;

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
