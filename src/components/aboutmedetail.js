import React, { Component } from 'react';

class AboutMeDetail extends Component {
	
	constructor(props) {
		super(props);

		this.items = {
			name: 'Joe Stowers',
			age: 38,
			location: 'Austin',
			occupation: 'Software Engineer'
		}
	}

	render() {
		return (
			<div>
				<li> {this.items.name} </li>
				<li> {this.items.age} </li>
			</div>
		)
	}
}

export default AboutMeDetail