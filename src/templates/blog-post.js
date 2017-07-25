import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Bio from '../components/Bio';
import Subscribe from '../components/Subscribe';

class BlogPostTemplate extends Component {
	render() {
		const post = this.props.data.markdownRemark;
		const siteTitle = get(this.props, 'data.site.siteMetadata.title');

		return (
			<article className="post">
				<Helmet
					title={`${post.frontmatter.title} | ${siteTitle}`}
					meta={[
						{ name: 'description', content: `${post.frontmatter.excerpt}` },
					]}
				/>

				<header className="post__header container">
					<h1 className="post__title">
						{post.frontmatter.title}
					</h1>
					<p className="post__meta">
						Posted on
						<time className="post__time">{post.frontmatter.date}</time>
					</p>
				</header>

				<div className="post__content container--narrow" dangerouslySetInnerHTML={{ __html: post.html }} />

				<Bio />
				<Subscribe />

				<div className="comments container--narrow">
					Have a question, comment, or concern? Please feel free to open an issue on <a href="https://github.com/jonbellah/jonbellah.com">GitHub</a>.
				</div>
			</article>
		);
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
				excerpt
			}
		}
	}
`;
