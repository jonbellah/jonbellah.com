import React from 'react';
import Helmet from 'react-helmet';

import talks from 'assets/data/talks';
import PageHeader from 'components/PageHeader';
import Talk from 'components/Talk';

const Speaking: React.FC = () => {
  const talkList = talks.map((item, i) => <Talk key={i} {...item} />);

  return (
    <div>
      <Helmet
        title="Speaking | JonBellah.com"
        meta={[
          {
            name: 'description',
            content:
              'Jon is an enthusiastic and experienced speaker who enjoys presenting talks and workshops on front-end web development.',
          },
        ]}
      />

      <div className="prose prose-lg text-gray-500 mx-auto pb-24 p-4">
        <PageHeader>Speaking</PageHeader>
        <p>
          I am an enthusiastic and experienced speaker who enjoys presenting
          talks and workshops on front-end web development. These days, I
          primarily focus on JavaScript/TypeScript with a particular interest in
          React, State Machines, GraphQL, Node.js, and web performance. If
          you&#8217;re interested in having me speak at your event, please{' '}
          <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;">
            get in touch
          </a>
          .
        </p>

        <h3>Biography</h3>
        <p>
          Jon is a software engineer, living in the beautiful city of Denver,
          Colorado. He began writing code when he was 10 years old; with the
          help of Geocities, Microsoft FrontPage, and a little bit of HTML
          Goodies, he started on the journey that&#8217;s led him to where he is
          today.
        </p>

        <p>
          Over the last 15+ years, Jon has published countless lines of code
          that has been seen or encountered by millions. He is passionate about
          high performance, accessible websites that deliver rich experiences to
          their users.
        </p>

        <h3>Previous Talks</h3>
        <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-3 lg:col-gap-5 lg:row-gap-12">
          {talkList}
        </div>
      </div>
    </div>
  );
};

export default Speaking;
