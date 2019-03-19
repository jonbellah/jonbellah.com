import React from 'react';
import GithubIcon from '../images/GithubIcon';
import RssIcon from '../images/RssIcon';
import TwitterIcon from '../images/TwitterIcon';
import YouTubeIcon from '../images/YouTubeIcon';

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
            <span className="screen-reader-text">YouTube</span>
            <YouTubeIcon />
          </a>

          <a href="https://twitter.com/jonbellah">
            <span className="screen-reader-text">Twitter</span>
            <TwitterIcon />
          </a>

          <a href="https://github.com/jonbellah">
            <span className="screen-reader-text">GitHub</span>
            <GithubIcon />
          </a>

          <a href="/rss.xml">
            <span className="screen-reader-text">RSS</span>
            <RssIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
