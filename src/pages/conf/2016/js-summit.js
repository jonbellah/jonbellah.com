import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Slides from '../../../components/Slides';

const JsSummit = () => {
	return (
		<div className="container">
			<header className="page__header">
				<h1 className="page__title">JavaScript Summit 2016</h1>
			</header>

			<div className="page__content container--narrow">
				<Slides id="c3ba6d7a9d604894a78f186ebf3717f4" />

				<strong>Relevant Links</strong>
				<ul>
					<li>
						<a href="https://github.com/JonBellah/visual-regression-testing-demo">Visual Regression Testing Demo</a>
					</li>
					<li>
						<a href="https://css-tricks.com/visual-regression-testing-with-phantomcss/">Visual Regression Testing with PhantomCSS on CSS-Tricks</a>
					</li>
					<li>
						<a href="https://github.com/Huddle/PhantomCSS">PhantomCSS</a>
					</li>
					<li>
						<a href="https://github.com/micahgodbolt/grunt-phantomcss">grunt-phantomcss</a>
					</li>
					<li>
						<a href="http://docs.casperjs.org/en/latest/">docs.casperjs.org</a>
					</li>
					<li>
						<a href="https://github.com/sass-mq/sass-mq">Sass MQ</a>
					</li>
					<li>
						<a href="https://github.com/jonathantneal/mdcss">mdcss</a>
					</li>
					<li>
						<a href="https://www.youtube.com/watch?v=ubNF9QNEQLA">Whodunnit?</a>
					</li>
				</ul>
			</div>
		</div>
	)
};

export default JsSummit;
