import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Contact extends React.Component {
	render() {
		return (
			<div className="container">
				<Helmet
					title="Contact | JonBellah.com"
					meta={[
						{ name: 'description', content: 'Get in touch!' }
					]}
				/>
				<header className="page__header">
					<h1 className="page__title">Contact</h1>
				</header>

				<div className="page__content page__content--contact container--narrow">
					<h3>Near Denver? Let&#8217;s grab a beer.</h3>
					<p>No? That&#8217;s cool, too. I still want to chat! The best way to get in touch is to follow me on Twitter at <a href="https://twitter.com/jonbellah">@jonbellah</a>. If you&#8217;d rather send an email, though, you can reach me at:</p>
					<a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;" className="contact__link">
						&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;
					</a>
				</div>
			</div>
		)
	}
}
