import React from 'react';

interface Props {
  children: React.ReactChild;
}

const PageHeader: React.FC<Props> = ({ children }) => {
  return (
    <header className="pt-20 pb-4 text-center">
      <h1>{children}</h1>
    </header>
  );
};

export default PageHeader;
