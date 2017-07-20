import React from 'react';
import PropTypes from 'prop-types';

const HTML = (props) => {
	return(
		<html lang="en">
			<head>
				{props.headComponents}
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
				{props.postBodyComponents}
			</body>
		</html>
	)
};

export default HTML;