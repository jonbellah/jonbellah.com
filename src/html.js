import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	headComponents: PropTypes.node.isRequired,
	body: PropTypes.node.isRequired,
	postBodyComponents: PropTypes.node.isRequired,
}

class Html extends Component {
	render() {
		return (
			<html lang="en">
				<head>
					{this.props.headComponents}
					<meta charSet="utf-8" />
					<meta name="description" content="JonBellah.com - Lead Front-End Engineer @ 10up" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>JonBellah.com</title>
				</head>
				<body>
					<div
						id="___gatsby"
						dangerouslySetInnerHTML={{ __html: this.props.body }}
					/>
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}

Html.propTypes = propTypes;

module.exports = Html;
