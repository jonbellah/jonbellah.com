import React from 'react';
import Helmet from 'react-helmet';

const Contact = () => (
  <div className="container">
    <Helmet
      title="Courses | JonBellah.com"
      meta={[{ name: 'description', content: 'Front-end web development courses by Jon Bellah' }]}
    />
    <header className="page__header">
      <h1 className="page__title">Courses</h1>
    </header>

    <div className="page__content page__content--contact container--narrow">
      
    </div>
  </div>
);

export default Contact;
