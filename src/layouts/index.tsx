import 'assets/css/styles.css';

import React from 'react';
import Helmet from 'react-helmet';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Subscribe from 'components/Subscribe';

interface Props {
  children: React.ReactChild;
}

const Layout: React.FC<Props> = ({ children }) => (
  <div className="bg-white">
    <Helmet
      title="JonBellah.com"
      meta={[
        {
          name: 'description',
          content:
            'Jon is a software engineer, teacher, speaker, and occasional writer from Denver, Colorado.',
        },
      ]}
    >
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jon Bellah" />
      <meta name="theme-color" content="#EAB75C" />
      <link rel="icon" href="/images/favicon.ico" type="x-icon/image" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Subscribe />
      <Footer />
    </div>
  </div>
);

export default Layout;
