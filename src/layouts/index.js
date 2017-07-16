import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

// Import Styles
import '../css/styles.scss';

// Import Images
import Logo from '../images/Logo';
import TwitterIcon from '../images/TwitterIcon';
import GithubIcon from '../images/GithubIcon';
import RssIcon from '../images/RssIcon';

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
								<NavLink to="/contact/" className="site-nav__item">
									Contact
								</NavLink>
							</nav>
						</div>
					</header>

					<main className="site-content">
						{this.props.children()}
					</main>

					<footer id="colophon" className="site-footer">
						<div className="container flex">
							<div className="site-footer__copyright">
								&copy; 2017 JonBellah.com. Made in Colorado.
							</div>

							<div className="site-footer__social">
								<Link to="https://twitter.com/jonbellah">
									<TwitterIcon />
								</Link>

								<Link to="https://github.com/jonbellah">
									<GithubIcon />
								</Link>

								<Link to="#">
									<RssIcon />
								</Link>
							</div>
						</div>
					</footer>
				</div>
			</div>
		)
	}
}
