import React from 'react';

const Slides = (props) => {
	return (
		<div className="slides">
			<iframe src={`https://speakerdeck.com/player/${props.id}`} />
		</div>
	);
};

export default Slides;