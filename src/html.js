import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Html extends Component {
	render() {
		return (
			<html lang="en">
				<head>
					{this.props.headComponents}
					<meta charSet="utf-8" />
					<meta name="description" content="Jon is a full-stack web developer, speaker, and occasional writer" />
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

Html.propTypes = {
	body: PropTypes.string,
};

export default Html;
