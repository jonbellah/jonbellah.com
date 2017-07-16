import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// Import Styles
import '../css/styles.css';
import '../css/typography.css';

// Import Images
import logo from '../images/logo.svg';

export default class Template extends Component {
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
				<div className="site">
					<header id="header" className="site-header">
						<Link to="/" className="site-header__link">
							<img src={logo} alt="Logo" className="site-header__logo" />
						</Link>

						<nav id="navigation" className="site-nav">
							<Link to="/articles/">
								Articles
							</Link>
						</nav>
					</header>
					<div className="site-content">
						{this.props.children()}
					</div>
					<footer id="colophon" className="site-footer">
						footer
					</footer>
				</div>
			</div>
		)
	}
}
