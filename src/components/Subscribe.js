import React, { Component } from 'react';

export default class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="subscribe container--narrow">
        <div className="subscribe__inner">
          <header className="subscribe__header">
            <h3>Like what you've read?</h3>
          </header>

          <div className="subscribe__content">
            If so, consider joining literally tens of other developers who
            receive regular tips and tutorials right in their inbox. No spam.
            Ever.
            <div id="mc_embed_signup" className="subscribe__mailchimp">
              <form
                action="//jonbellah.us4.list-manage.com/subscribe/post?u=cd903cc3fde462d23ad126e77&amp;id=7e4d3d0c6a"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div
                  id="mc_embed_signup_scroll"
                  className="flex subscribe__fields"
                >
                  <div className="mc-field-group subscribe__email">
                    <label className="screen-reader-text" htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      value={this.state.email}
                      onChange={this.handleInput}
                      placeholder="Email Address"
                      autoComplete="off"
                      name="EMAIL"
                      className="required email"
                      id="mce-EMAIL"
                    />
                  </div>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: 'none' }}
                    />
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_cd903cc3fde462d23ad126e77_7e4d3d0c6a"
                      tabIndex="-1"
                      value=""
                    />
                  </div>
                  <div className="mc-field-group subscribe__button">
                    <input
                      type="submit"
                      value="Subscribe"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
