import React from 'react';

const Talk = (props) => {
	const { conf, date, location, talk } = props;

	return (
		<div className="talk">
			<strong>{conf}</strong>
			<p>{date}</p>
			<p>{location}</p>
			<p>{talk}</p>
		</div>
	);
};

export default Talk;
