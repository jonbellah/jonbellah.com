import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Accordion from '../components/Accordion';

const Speaking = () => {
	return (
		<div className="container">
			<header className="page__header">
				<h1 className="page__title">Speaking</h1>
			</header>

			<div className="page__content container--narrow">
				I provide talks and workshops on web design and development. These days, I primarly focus on JavaScript, with a particular focus on React and its surrounding ecosystem. If you're interested in having me speak at your event, please get in touch at <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;</a>.
				<h3>Past Talks</h3>

				<Accordion title="Visual Regression Testing with PhantomCSS">
					<p>You've spent months perfecting your site; building your components and checking them twice. You’ve gone through more QA than you can shake a stick at, and you’re now completely change blind... but you're finally ready to launch that site!</p>

					<p>Suddenly, at the last minute, the client requires major changes to the a critical component (probably the legal department, it’s always the legal department).</p>

					<p>You make the changes and launch the site.</p>

					<p>But wait, oh no! The client has reported some issues on a template you didn't think to check!</p>

					<p>In the past, catching these visual regressions was a manual process. One where everyone is responsible for paying attention to what their code is doing and (hopefully) what else it may affect, with occasional passes through the site for overall QA. But we're human, mistakes happen… sometimes frequently.</p>

					<p>Automated visual regression testing is an excellent way to build yourself a safety net. With PhantomCSS, you can create a test suite that automagically runs through your site after changes have been made, compares visual diffs, and alerts you of any changes.</p>

					<strong>Where I've presented this talk</strong>
					<ul>
						<li>
							<Link to="/conf/2016/front-porch/">Front Porch Austin 2016</Link>
						</li>
						<li>
							<Link to="/conf/2016/js-summit/">JS Summit 2016</Link>
						</li>
					</ul>
				</Accordion>

				<Accordion title="Embracing Performance Optimization">
					<p>When it comes to front-end development, performance often takes a backseat to design and user interface, but that shouldn’t be the case. Building a high-performance website is integral to creating great a user experience. Optimizing the critical rendering path, eliminating unnecessary roundtrips, reducing page weight, and other optimization techniques can have a huge impact on your bottom line.</p>

					<p>Study after study continues to find a link between the performance of your website and the performance of your business. Thinking of speed as a feature, from an organizational standpoint, and investing time into it often yields tangible results.</p>

					<p>In this session, we'll take a look at some  of the ways you can improve the performance of your websites and how that optimization can affect your business.</p>

					<ul>
						<li>CSS Dev Conf 2014</li>
						<li>WordCamp DFW 2014</li>
						<li><a href="http://www.youtube.com/embed/RsaYR8wMDRk">Front Porch 2013</a></li>
					</ul>
				</Accordion>
			</div>
		</div>
	)
};

export default Speaking;
