import Link from 'gatsby-link';
import React, { Component } from 'react';
import Logo from '../images/Logo';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuOpen: false,
    };

    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.closeMobileMenu = this.closeMobileMenu.bind(this);
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen,
    });
  }

  closeMobileMenu() {
    this.setState({
      mobileMenuOpen: false,
    });
  }

  render() {
    const menuClass = this.state.mobileMenuOpen ? 'active' : '';

    return (
      <header id="header" className="site-header animated fadeInDown">
        <div className="container">
          <Link to="/" className="site-header__link">
            <span className="screen-reader-text">Home</span>
            <Logo className="site-header__logo" />
          </Link>
          <button
            id="mobile-toggle"
            className={`toggle-icon ${menuClass}`}
            aria-label="Mobile menu"
            onClick={this.toggleMobileMenu}
          >
            <span className="screen-reader-text">Menu</span>
            <span className="line line-1" />
            <span className="line line-2" />
            <span className="line line-3" />
          </button>

          <nav id="navigation" className={`site-nav ${menuClass}`}>
            <Link
              activeClassName="active"
              to="/courses/"
              className="site-nav__item"
              onClick={this.closeMobileMenu}
            >
              Courses
            </Link>
            <Link
              activeClassName="active"
              to="/articles/"
              className="site-nav__item"
              onClick={this.closeMobileMenu}
            >
              Articles
            </Link>
            <Link
              activeClassName="active"
              to="/speaking/"
              className="site-nav__item"
              onClick={this.closeMobileMenu}
            >
              Speaking
            </Link>
            <Link
              activeClassName="active"
              to="/contact/"
              className="site-nav__item"
              onClick={this.closeMobileMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}
