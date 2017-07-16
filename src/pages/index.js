import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Index extends React.Component {
	render() {
		return (
			<div className="container">
				<h1>Hi people</h1>
				<p>Welcome to your new Gatsby site.</p>
				<p>Now go build something great.</p>
			</div>
		)
	}
}
