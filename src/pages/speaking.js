import React from 'react';
import Helmet from 'react-helmet';

import talks from '../data/talks';

import Talk from '../components/Talk';

const Speaking = () => {
	const talkList = talks.map(item => <Talk key={item.index} {...item} />);

	return (
		<div className="container">
			<header className="page__header">
				<h1 className="page__title">Speaking</h1>
			</header>

			<div className="page__content container--narrow">
				<p className="page__subhead">
					I am an enthusiastic and experienced speaker who enjoys presenting talks and workshops on front-end web development. These days, I primarily focus on JavaScript with a particular interest in React, Redux, and Jest. If you're interested in having me speak at your event, please <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;">get in touch</a>.
				</p>

				<h3>Biography</h3>
				<p>Jon is a Lead Front-End Engineer at 10up, living in the beautiful city of Denver, Colorado. He began writing code when he was 10 years old; with the help of Geocities, Microsoft FrontPage, and a little bit of HTML Goodies, he started on the journey that’s led him to where he is today.</p>

				<p>Over the last 15+ years, Jon has published countless lines of code that has been seen or encountered by millions. He is passionate about high performance, accessible websites that deliver rich experiences to their users.</p>

				<h3>Previous Talks</h3>
				<div className="talks">
					{talkList}
				</div>
			</div>
		</div>
	)
};

export default Speaking;
