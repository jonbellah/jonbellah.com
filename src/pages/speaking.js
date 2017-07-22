import React from 'react';
import Link from 'gatsby-link';
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
				I provide talks and workshops on web design and development. These days, I primarly focus on JavaScript, with a particular focus on React and its surrounding ecosystem. If you're interested in having me speak at your event, please get in touch at <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;">&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;</a>.
				<h3>Biography</h3>
				
				<h3>Previous Talks</h3>
				<div className="talks__container">
					{talkList}
				</div>
			</div>
		</div>
	)
};

export default Speaking;
