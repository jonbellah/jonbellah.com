import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container">
				<header className="page__header">
					<h1 className="page__title">Contact</h1>
				</header>

				<div className="page__content page__content--contact container--narrow">
					<h3>Near Denver? Let's grab a beer.</h3>
					<p>No? That's cool, too. I still want to chat! The best way to get in touch is to follow me on Twitter at <a href="https://twitter.com/jonbellah">@jonbellah</a>. If you'd like to send an email, you can reach me at:</p>
					<a href="#">
						hello (at) jonbellah (dot) com
					</a>
				</div>
			</div>
		)
	}
}
