import React from 'react';
import Link from 'gatsby-link';

interface Props {
  conf: string;
  date: string;
  location: string;
  talk: string;
  link?: string;
  slides?: string;
  video?: string;
}

const Talk: React.FC<Props> = ({
  conf,
  date,
  location,
  talk,
  link,
  slides,
  video,
}) => {
  const talkLink = link ? <a href={link}>Link</a> : false;
  const slidesLink = slides ? <Link to={slides}>Slides</Link> : false;
  const videoLink = video ? <a href={video}>Video</a> : false;

  return (
    <div>
      <strong>{conf}</strong>
      <span>{date}</span>
      <span>{location}</span>
      <span>{talk}</span>

      <div>
        {talkLink}
        {slidesLink}
        {videoLink}
      </div>
    </div>
  );
};

export default Talk;
