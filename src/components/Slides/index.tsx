import React from 'react';

interface Props {
  id: string;
}

const Slides: React.FC<Props> = ({ id }) => (
  <div className="w-full relative" style={{ paddingBottom: '56.25%' }}>
    <iframe
      className="w-full absolute top-0 left-0 bottom-0 h-full"
      title="Conference slides"
      src={`https://speakerdeck.com/player/${id}`}
    />
  </div>
);

export default Slides;
