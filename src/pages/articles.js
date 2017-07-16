import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

export default class Articles extends Component {
	render() {
		const pageLinks = [];
		const posts = get(this, "props.data.allMarkdownRemark.edges");
		posts.forEach(post => {
			if (post.node.path !== "/404/") {
				const title = get(post, "node.frontmatter.title") || post.node.path
				pageLinks.push(
				<li key={post.node.frontmatter.path}>
					<Link style={{ boxShadow: "none" }} to={post.node.frontmatter.path}>
						{post.node.frontmatter.title}
					</Link>
				</li>
				)
			}
		});
	
		return (
			<div className="container">
				<header className="page__header">
					<h1 className="page__title">Articles</h1>
				</header>

				<div className="container--narrow">
					{pageLinks}
				</div>
			</div>
		);
	}
}

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
					}
				}
			}
		}
	}
`