import React, { Component } from 'react';

export default class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};

		this.toggleOpen = this.toggleOpen.bind(this);
	}

	toggleOpen() {
		this.setState({ open: !this.state.open });
	}

	render() {
		const openClass = this.state.open ? 'is-open' : '';
		const buttonText = this.state.open ? 'Collapse' : 'Read More';

		return (
			<div className="accordion">
				<h5 className={`accordion__title ${openClass}`} onClick={this.toggleOpen}>
					{this.props.title}
				</h5>
				<div className={`accordion__content ${openClass}`}>
					{this.props.children}
				</div>
			</div>
		);
	}
}
