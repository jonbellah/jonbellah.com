import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/PageHeader';

const Contact: React.FC = () => (
  <div>
    <Helmet
      title="Courses | JonBellah.com"
      meta={[
        {
          name: 'description',
          content: 'Front-end web development courses by Jon Bellah',
        },
      ]}
    />

    <div className="prose prose-lg text-gray-500 mx-auto pb-24 p-4">
      <PageHeader>Courses</PageHeader>
      <p>
        If you&apos;re a front-end developer interested in leveling up your
        skills, you&apos;ve come to the right place!
      </p>

      <p>
        I&apos;m hard at work on new courses, so keep an eye out here. In the
        meantime, I&apos;d love for you to check out my state machines course.
      </p>

      <h3>Learn State Machines</h3>
      <p>
        Finite state machines and statecharts help developers build more
        predictable interfaces by providing sequential, easily-modeled logic. In
        this course, you&apos;ll learn how to make use of state machines in your
        JavaScript applications.
      </p>

      <p>
        Together, we will take an application called Photobook from comp to
        working application. The app has many of the features that you would
        expect to find in apps today: authentication, data fetching, CRUD
        actions, automated tests, and more.
      </p>

      <a href="https://learnstatemachines.com">LearnStateMachines.com</a>
    </div>
  </div>
);

export default Contact;
