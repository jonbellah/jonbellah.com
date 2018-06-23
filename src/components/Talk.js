import React from 'react';
import Link from 'gatsby-link';

const Talk = props => {
  const { conf, date, location, talk, link, slides, video } = props;
  const talkLink = link ? <a href={link}>Link</a> : false;
  const slidesLink = slides ? <Link to={slides}>Slides</Link> : false;
  const videoLink = video ? <a href={video}>Video</a> : false;

  return (
    <div className="talk">
      <strong className="talk__event">{conf}</strong>
      <span className="talk__date">{date}</span>
      <span className="talk__location">{location}</span>
      <span className="talk__title">{talk}</span>

      <div className="talk__links">
        {talkLink}
        {slidesLink}
        {videoLink}
      </div>
    </div>
  );
};

export default Talk;
