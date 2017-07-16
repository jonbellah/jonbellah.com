import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

export default class Articles extends Component {
	render() {
		const pageLinks = [];
		const posts = get(this, "props.data.allMarkdownRemark.edges");
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		posts.forEach(post => {
			if (post.node.path !== "/404/") {
				const title = get(post, "node.frontmatter.title") || post.node.path;
				const date = new Date(post.node.frontmatter.date);
				pageLinks.push(
				<article className="feed__item" key={post.node.frontmatter.path}>
					<Link className="feed__link" to={post.node.frontmatter.path}>
						<h4 className="feed__title">
							{post.node.frontmatter.title}
						</h4>
						<time className="feed__time">
							{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
						</time>
					</Link>
				</article>
				)
			}
		});
	
		return (
			<div className="container">
				<header className="page__header">
					<h1 className="page__title">Articles</h1>
				</header>

				<div className="feed container--narrow">
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
						date
					}
				}
			}
		}
	}
`