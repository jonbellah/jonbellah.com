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
  const talkLink = link ? (
    <a href={link} className="inline-block text-sm mr-4">
      Link
    </a>
  ) : (
    false
  );
  const slidesLink = slides ? (
    <Link to={slides} className="inline-block text-sm mr-4">
      Slides
    </Link>
  ) : (
    false
  );
  const videoLink = video ? (
    <a href={video} className="inline-block text-sm mr-4">
      Video
    </a>
  ) : (
    false
  );

  return (
    <div className="flex flex-col leading-snug">
      <strong>{conf}</strong>
      <span className="text-sm">{date}</span>
      <span className="text-sm">{location}</span>
      <span className="text-sm italic pb-3">{talk}</span>

      <div className="flex flex-row">
        {talkLink}
        {slidesLink}
        {videoLink}
      </div>
    </div>
  );
};

export default Talk;
