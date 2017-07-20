import React from 'react';
import PropTypes from 'prop-types';

const BUILD_TIME = new Date().getTime();

export default class HTML extends Component {
	static propTypes = {
		body: PropTypes.string,
	}

	render() {
		return (
			<html lang="en">
				<head>
					{this.props.headComponents}
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>JonBellah.com</title>
				</head>
				<body>
					<div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
					{this.props.postBodyComponents}
				</body>
			</html>
		)
	}
}
