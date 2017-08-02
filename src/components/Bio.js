import React from 'react';
import { Link } from 'react-router-dom';

import avatar from '../images/avatar.jpg';

const Bio = () => (
	<div className="author container--narrow" itemProp="author" itemScope itemType="http://schema.org/Person">
		<div className="author__avatar">
			<img className="avatar" itemProp="image" src={avatar} alt="Image of Jon Bellah" />
		</div>

		<div className="author__info">
			<span className="author__name" itemProp="name">
				Jon Bellah
			</span>
			<div className="author__bio" itemProp="description">
				I am a full-stack web developer, speaker, and occasional writer. I live in the beautiful city of Denver, Colorado. I am currently employed as a Lead Front-End Engineer at <a href="https://10up.com">10up</a>. You can follow me on Twitter at <a href="https://twitter.com/jonbellah">@jonbellah</a>.
			</div>
		</div>
	</div>
);

export default Bio;
