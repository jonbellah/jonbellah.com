import React from 'react';

interface Props {
  id: string;
}

const Slides: React.FC<Props> = ({ id }) => (
  <div>
    <iframe
      title="Conference slides"
      src={`https://speakerdeck.com/player/${id}`}
    />
  </div>
);

export default Slides;
