import React from 'react';
import Helmet from 'react-helmet';

import PageHeader from 'components/PageHeader';

const Contact: React.FC = () => (
  <div>
    <Helmet
      title="Contact | JonBellah.com"
      meta={[{ name: 'description', content: 'Get in touch!' }]}
    />

    <div className="prose prose-lg text-gray-500 mx-auto pb-24 text-center">
      <PageHeader>Contact</PageHeader>

      <p className="text-center">
        The best way to get in touch is to hit me up on Twitter at{' '}
        <a href="https://twitter.com/jonbellah">@jonbellah</a>. If you&#8217;d
        rather send an email, though, you can reach me at:
      </p>
      <a
        href="mailto:&#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;"
        className="text-4xl font-bold"
      >
        &#104;&#101;&#108;&#108;&#111;&#064;&#106;&#111;&#110;&#098;&#101;&#108;&#108;&#097;&#104;&#046;&#099;&#111;&#109;
      </a>
    </div>
  </div>
);

export default Contact;
