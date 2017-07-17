import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const Speaking = () => {
	return (
		<div className="container">
			<header className="page__header">
				<h1 className="page__title">Current Talks</h1>
			</header>

			<div className="page__content container--narrow">
				<h3>Visual Regression Testing with PhantomCSS</h3>
				<p>You've spent months perfecting your site; building your components and checking them twice. You’ve gone through more QA than you can shake a stick at, and you’re now completely change blind... but you're finally ready to launch that site!</p>

				<p>Suddenly, at the last minute, the client requires major changes to the a critical component (probably the legal department, it’s always the legal department).</p>

				<p>You make the changes and launch the site.</p>

				<p>But wait, oh no! The client has reported some issues on a template you didn't think to check!</p>

				<p>In the past, catching these visual regressions was a manual process. One where everyone is responsible for paying attention to what their code is doing and (hopefully) what else it may affect, with occasional passes through the site for overall QA. But we're human, mistakes happen… sometimes frequently.</p>

				<p>Automated visual regression testing is an excellent way to build yourself a safety net. With PhantomCSS, you can create a test suite that automagically runs through your site after changes have been made, compares visual diffs, and alerts you of any changes.</p>

				<strong>Where I've presented this talk</strong>
				<ul>
					<li><a href="https://jonbellah.com/talks/frontporch/">Front Porch Austin 2016</a></li>
					<li><a href="https://jonbellah.com/talks/js-summit/">JS Summit 2016</a></li>
				</ul>

				<h3>Past Talks</h3>
				<strong>Embracing Performance Optimization</strong>
				<ul>
					<li>CSS Dev Conf 2014</li>
					<li>WordCamp DFW 2014</li>
					<li><a href="http://www.youtube.com/embed/RsaYR8wMDRk">Front Porch 2013</a></li>
				</ul>
			</div>
		</div>
	)
};

export default Speaking;
