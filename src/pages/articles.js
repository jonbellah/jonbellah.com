import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

export default class Articles extends Component {
	constructor(props) {
		super(props);

		this.buildPostLinks = this.buildPostLinks.bind(this);
	}

	buildPostLinks() {
		const postLinks = [];
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


		let posts = get(this, 'props.data.allMarkdownRemark.edges');
		posts = posts.sort((a, b) => (
			new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
		));

		posts.forEach((post) => {
			if (post.node.path !== '/404/') {
				const date = new Date(post.node.frontmatter.date);
				postLinks.push(
					<article className="feed__item" key={post.node.frontmatter.path}>
						<Link className="feed__link" to={post.node.frontmatter.path}>
							<h4 className="feed__title">
								{post.node.frontmatter.title}
							</h4>
							<time className="feed__time">
								{`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`}
							</time>
						</Link>
					</article>,
				);
			}
		});

		return postLinks;
	}

	render() {
		return (
			<div className="container">
				<Helmet
					title="Articles | JonBellah.com"
					meta={[
						{ name: 'description', content: 'Jon Bellah on all things front-end web development' },
					]}
				/>
				<header className="page__header">
					<h1 className="page__title">Articles</h1>
				</header>

				<div className="feed container--narrow">
					{this.buildPostLinks()}
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