import React from 'react';
import Link from 'gatsby-link';

const NotFound: React.FC = () => (
  <div>
    <header>
      <h1>Not Found</h1>
    </header>

    <div>
      <p>
        Sorry, the page you&apos;re looking for does not exist. Try taking a
        look through the <Link to="/articles/">archives</Link>.
      </p>
    </div>
  </div>
);

export default NotFound;
