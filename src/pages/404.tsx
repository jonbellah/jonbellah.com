import React from 'react';
import Link from 'gatsby-link';

import PageHeader from 'components/PageHeader';

const NotFound: React.FC = () => (
  <div className="prose prose-lg text-gray-500 mx-auto pb-24 p-4">
    <PageHeader>Not Found</PageHeader>

    <p>
      Sorry, the page you&apos;re looking for does not exist. Try taking a look
      through the <Link to="/articles/">archives</Link>.
    </p>
  </div>
);

export default NotFound;
