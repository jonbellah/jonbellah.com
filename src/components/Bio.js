import React from 'react';

import avatar from '../images/avatar.jpg';

const Bio = () => {
	return (
		<div class="author" itemprop="author" itemscope itemtype="http://schema.org/Person">
			<div class="author__avatar">
				<img itemprop="image" src={avatar} alt="Image of Jon Bellah" />
			</div>

			<div class="author__info">
				<span itemprop="author__name">
					Jon Bellah
				</span>
				<div class="author__bio" itemprop="description">
					I am a full-stack web developer, speaker, and occasional writer. I live in the beautiful city of Denver, Colorado. I am currently employed as a Lead Front-End Engineer at 10up. You can follow me on Twitter at @jonbellah.
				</div>
			</div>
		</div>
	)
};

export default Bio;
