import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Index extends React.Component {
	render() {
		return (
			<div className="container flex flex-hor-center">
				<div className="hero">
					<span className="hero__label">Hello, my name is</span>
					<h1 className="hero__title">Jon Bellah</h1>
					<p>Welcome to your new Gatsby site.</p>
					<p>Now go build something great.</p>
				</div>
			</div>
		)
	}
}
