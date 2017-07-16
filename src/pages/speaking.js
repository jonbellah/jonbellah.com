import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Speaking extends React.Component {
	render() {
		return (
			<div className="container">
				<header className="page__header">
					<h1 className="page__title">Current Talks</h1>
				</header>

				<div className="container--narrow">
					<h4>Visual Regression Testing with PhantomCSS</h4>
					You've spent months perfecting your site; building your components and checking them twice. You’ve gone through more QA than you can shake a stick at, and you’re now completely change blind... but you're finally ready to launch that site!

					Suddenly, at the last minute, the client requires major changes to the a critical component (probably the legal department, it’s always the legal department).

					You make the changes and launch the site.

					But wait, oh no! The client has reported some issues on a template you didn't think to check!

					In the past, catching these visual regressions was a manual process. One where everyone is responsible for paying attention to what their code is doing and (hopefully) what else it may affect, with occasional passes through the site for overall QA. But we're human, mistakes happen… sometimes frequently.

					Automated visual regression testing is an excellent way to build yourself a safety net. With PhantomCSS, you can create a test suite that automagically runs through your site after changes have been made, compares visual diffs, and alerts you of any changes.

					<strong>Where I've presented this talk</strong>
					- <a href="https://jonbellah.com/talks/frontporch/">Front Porch Austin 2016</a>
					- <a href="https://jonbellah.com/talks/js-summit/">JS Summit 2016</a>
					<h3>Past Talks</h3>
					<strong>Embracing Performance Optimization</strong>
					- CSS Dev Conf 2014
					- WordCamp DFW 2014
					- <a href="http://www.youtube.com/embed/RsaYR8wMDRk">Front Porch 2013</a>
				</div>
			</div>
		)
	}
}
