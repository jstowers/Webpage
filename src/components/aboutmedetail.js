import React, { Component } from 'react';

import NavBar from './navbar';

class AboutMeDetail extends Component {
	
	constructor(props) {
		super(props);

		this.items = {
			punchline: 'Positively driven, Creatively built',
			location: 'Austin, San Francisco',
			occupation: 'Software Engineer'
		}
	}

	render() {
		return (
			<div className = "row">
				<div className = "col-sm-4">
					<h3> {this.items.punchline} </h3>
					<h4> {this.items.occupation} </h4>
					<h5> {this.items.location} </h5>
				</div>
				<div className = "col-sm-8 main-photo">
					<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
				</div>
			</div>
		)
	}
}

export default AboutMeDetail