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
					I provide talks and workshops on web design and development. These days, I primarly focus on JavaScript, with a particular focus on React and its surrounding ecosystem. If you're interested in having me speak at your event, please get in touch at <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;</a>.
				</p>

				<h3>Biography</h3>
				<p>Jon began writing code at an early age, when his parents bought their first family computer. His interest grew out of a desire to build websites for his various gaming interests (mostly StarCraft), so with the help of Geocities, Microsoft FrontPage, and some HTML Goodies, he started on the journey that eventually led him to WordPress.</p>

				<p>Jon has been working with WordPress for several years now. In that time, he has worked with a variety of clients ranging from small, Mom and Pop businesses to Fortune 500 enterprises.</p>

				<p>Prior to joining 10up, Jon was Director of Web Development at a boutique advertising agency near Dallas, TX. In early 2014, Jon launched a small premium theme shop that he’s since sold to the crew at UpThemes.</p>

				<p>In addition to WordPress, Jon has also spent time tinkering with Ruby on Rails, Node, Backbone, and Angular projects over the last few years.</p>
				<h3>Previous Talks</h3>
				<div className="talks">
					{talkList}
				</div>
			</div>
		</div>
	)
};

export default Speaking;
