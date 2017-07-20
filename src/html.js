import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Html extends Component {
	render() {
		return (
			<html lang="en">
				<head>
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					{this.props.headComponents}
				</head>
				<body>
					<div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}

Html.propTypes = {
	headComponents: PropTypes.node.isRequired,
	body: PropTypes.node.isRequired,
	postBodyComponents: PropTypes.node.isRequired,
}
