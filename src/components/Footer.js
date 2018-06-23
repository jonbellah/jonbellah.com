import React from 'react';

import TwitterIcon from '../images/TwitterIcon';
import GithubIcon from '../images/GithubIcon';
import YouTubeIcon from '../images/YouTubeIcon';
import RssIcon from '../images/RssIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className="site-footer animated fadeInUp">
      <div className="container flex">
        <div className="site-footer__copyright">
          &copy; {currentYear} JonBellah.com. Made in Colorado.
        </div>

        <div className="site-footer__social">
          <a href="https://youtube.com/jonbellah">
            <YouTubeIcon />
          </a>

          <a href="https://twitter.com/jonbellah">
            <TwitterIcon />
          </a>

          <a href="https://github.com/jonbellah">
            <GithubIcon />
          </a>

          <a href="/rss.xml">
            <RssIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
