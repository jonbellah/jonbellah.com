import React from 'react';

const Slides = props => (
  <div className="slides">
    <iframe
      title="Conference slides"
      src={`https://speakerdeck.com/player/${props.id}`}
    />
  </div>
);

export default Slides;
