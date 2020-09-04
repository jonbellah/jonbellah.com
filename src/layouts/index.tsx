import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../css/styles.scss';
import favicon from '../images/favicon.ico';

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="JonBellah.com"
      meta={[
        {
          name: 'description',
          content:
            'Jon is a full-stack web developer, speaker, and occasional writer',
        },
      ]}
    >
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jon Bellah" />
      <meta name="theme-color" content="#EAB75C" />
      <link rel="icon" href={favicon} type="x-icon/image" />
      <link rel="manifest" href="/manifest.json" />
    </Helmet>
    <div className="site">
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
