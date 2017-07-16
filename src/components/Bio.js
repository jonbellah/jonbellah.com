import React from 'react';

import avatar from '../images/avatar.jpg';

const Bio = () => {
	return (
		<div className="author container--narrow" itemProp="author" itemScope itemType="http://schema.org/Person">
			<div className="author__avatar">
				<img className="avatar" itemProp="image" src={avatar} alt="Image of Jon Bellah" />
			</div>

			<div className="author__info">
				<span itemProp="author__name">
					Jon Bellah
				</span>
				<div className="author__bio" itemProp="description">
					I am a full-stack web developer, speaker, and occasional writer. I live in the beautiful city of Denver, Colorado. I am currently employed as a Lead Front-End Engineer at 10up. You can follow me on Twitter at @jonbellah.
				</div>
			</div>
		</div>
	)
};

export default Bio;
