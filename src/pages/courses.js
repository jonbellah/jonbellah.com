import React from 'react';
import Helmet from 'react-helmet';
import Subscribe from '../components/Subscribe';

const Contact = () => (
  <div className="container">
    <Helmet
      title="Courses | JonBellah.com"
      meta={[
        {
          name: 'description',
          content: 'Front-end web development courses by Jon Bellah',
        },
      ]}
    />
    <header className="page__header">
      <h1 className="page__title">Courses</h1>
    </header>

    <div className="page__content container--narrow">
      <p className="page__subhead">
        If you're a front-end developer interested in leveling up, you've come
        to the right place!
      </p>

      <p>
        I'm hard at work on new courses, so keep an eye out here. In the
        meantime, check out my state machines course.
      </p>

      <h3>Learn State Machines</h3>
      <p>
        Finite state machines and statecharts help developers build more
        predictable interfaces by providing sequential, easily-modeled logic. In
        this course, you'll learn how to make use of state machines in your
        JavaScript applications.
      </p>

      <p>
        In this course, we will take an application called Photobook from comp
        to working application. The app has many of the features that you would
        expect to find in apps today: authentication, data fetching, CRUD
        actions, automated tests, and more.
      </p>
    </div>

    <Subscribe
      heading="Want to stay in the loop?"
      content="If so, subscribe below and I'll let you know when new courses are released. No spam. Ever."
    />
  </div>
);

export default Contact;
