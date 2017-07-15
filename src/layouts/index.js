import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import '../css/typography.css';

export default class Template extends React.Component {
	static propTypes = {
		children: PropTypes.func,
	}

	render() {
		return (
			<div>
				<Helmet
					title="JonBellah.com"
					meta={[
						{ name: "description", content: "Sample" },
						{ name: "keywords", content: "sample, something" },
					]}
				/>
				<div>
					<div>
						<h1>
							<Link to="/">
								Gatsby
							</Link>
						</h1>
					</div>
				</div>
				<div>
					{this.props.children()}
				</div>
			</div>
		)
	}
}
