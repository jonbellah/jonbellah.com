import React from 'react';

import PageHeader from 'components/PageHeader';
import Slides from 'components/Slides';

const JsSummit: React.FC = () => {
  return (
    <div className="prose prose-lg text-gray-500 mx-auto pb-24">
      <PageHeader>JavaScript Summit 2016</PageHeader>

      <div>
        <Slides id="c3ba6d7a9d604894a78f186ebf3717f4" />

        <h2>Relevant Links</h2>
        <ul>
          <li>
            <a href="https://github.com/JonBellah/visual-regression-testing-demo">
              Visual Regression Testing Demo
            </a>
          </li>
          <li>
            <a href="https://css-tricks.com/visual-regression-testing-with-phantomcss/">
              Visual Regression Testing with PhantomCSS on CSS-Tricks
            </a>
          </li>
          <li>
            <a href="https://github.com/Huddle/PhantomCSS">PhantomCSS</a>
          </li>
          <li>
            <a href="https://github.com/micahgodbolt/grunt-phantomcss">
              grunt-phantomcss
            </a>
          </li>
          <li>
            <a href="http://docs.casperjs.org/en/latest/">docs.casperjs.org</a>
          </li>
          <li>
            <a href="https://github.com/sass-mq/sass-mq">Sass MQ</a>
          </li>
          <li>
            <a href="https://github.com/jonathantneal/mdcss">mdcss</a>
          </li>
          <li>
            <a href="https://www.youtube.com/watch?v=ubNF9QNEQLA">Whodunnit?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default JsSummit;
