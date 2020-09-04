import React from 'react';
import Link from 'gatsby-link';

const NotFound = () => (
  <div className="container">
    <header className="page__header">
      <h1 className="page__title">Not Found</h1>
    </header>

    <div className="page__content page__content--notfound container--narrow">
      <p>
        Sorry, the page you&#8217;re looking for does not exist. Try taking a
        look through the <Link to="/articles/">archives</Link>.
      </p>
    </div>
  </div>
);

export default NotFound;
