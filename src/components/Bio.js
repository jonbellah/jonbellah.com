import React from 'react';
import avatar from '../images/avatar.jpg';

const Bio = () => (
	<div className="author container--narrow" itemProp="author" itemScope itemType="http://schema.org/Person">
		<div className="author__avatar">
			<img className="avatar" itemProp="image" src={avatar} alt="Jon Bellah" />
		</div>

		<div className="author__info">
			<span className="author__name" itemProp="name">
				Jon Bellah
			</span>
			<div className="author__bio" itemProp="description">
				I am a front-end web developer, speaker, and occasional writer. I currently work with the amazing team at <a href="https://ted.com">TED</a> as a front-end engineer. I live in the beautiful city of Denver, Colorado. You can follow me on Twitter at <a href="https://twitter.com/jonbellah">@jonbellah</a>.
			</div>
		</div>
	</div>
);

export default Bio;
