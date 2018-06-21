import React, { Component } from 'react';
import PropTypes from 'prop-types';

import favicon from './images/favicon.ico';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

class Html extends Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
      );
    }

    return (
      <html lang="en">
        <head>
          {this.props.headComponents}

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google-site-verification" content="sa8JcDij4nh51t_WdMTJTV0kDda7evQYexnqy6rwnRo" />
          <link rel="icon" href={favicon} type="x-icon/image" />
          {css}
        </head>
        <body>
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;

module.exports = Html;
