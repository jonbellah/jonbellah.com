import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Bio from '../components/Bio';

class BlogPostTemplate extends Component {
	render() {
		const post = this.props.data.markdownRemark
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div>
				<Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
				<h1 className="post__title">
					{post.frontmatter.title}
				</h1>
				<p>
					{post.frontmatter.date}
				</p>
				<div className="post__content" dangerouslySetInnerHTML={{ __html: post.html }} />

				<Bio />
			</div>
		)
	}
}

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
			}
		}
	}
`;
