import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import RightArrow from '../images/RightArrow';

const Index = () => (
	<div className="container flex flex-hor-center">
		<Helmet
			title="JonBellah.com"
			meta={[
				{ name: 'description', content: 'Jon is a front-end web developer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.' },
			]}
		/>
		<div className="hero">
			<span className="hero__label">Hello, my name is</span>
			<h1 className="hero__title">Jon Bellah</h1>
			<p className="hero__bio">I am a front-end web developer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.</p>
			<Link to="/articles/" className="hero__link">Check out my articles <RightArrow /></Link>
		</div>
	</div>
);

export default Index;
