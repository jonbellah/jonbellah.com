import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

// Import Styles
import '../css/styles.scss';

// Import Images
import Logo from '../images/Logo';

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
						<div className="container">
							<Link to="/" className="site-header__link">
								<Logo className="site-header__logo" />
							</Link>

							<nav id="navigation" className="site-nav">
								<NavLink to="/articles/" className="site-nav__item">
									Articles
								</NavLink>
								<NavLink to="/speaking/" className="site-nav__item">
									Speaking
								</NavLink>
								<NavLink to="/about/" className="site-nav__item">
									About
								</NavLink>
							</nav>
						</div>
					</header>

					<main className="site-content">
						{this.props.children()}
					</main>

					<footer id="colophon" className="site-footer">
						footer
					</footer>
				</div>
			</div>
		)
	}
}
