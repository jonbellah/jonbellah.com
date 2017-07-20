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
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Jon Bellah" />
					<meta name="theme-color" content="#EAB75C" />
					<link rel="icon" href={favicon} type="x-icon/image" />
					<link rel="manifest" href="/manifest.json" />
					<title>JonBellah.com</title>
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
