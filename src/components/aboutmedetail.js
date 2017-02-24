import React, { Component } from 'react';

import NavBar from './navbar';

class AboutMeDetail extends Component {
	
	constructor(props) {
		super(props);

		this.items = {
			punchline: 'Positively driven, Creatively built',
			occupation: 'Software Engineer',
			technologies: 'JavaScript, React, Angular, Node, MongoDB',
			goal: 'Seeking a full-stack web developer job that provides an outlet for my creativity and problem-solving skills.  ' + 
			'Stir in a challenge, sprinkle with beauty, and savor the goodness.'
		}
	}

	// <h4> like 

	render() {
		return (
			<div className = "row">
				<div className = "col-sm-4 about-me">
					<h2> {this.items.punchline} </h2>
					<h4> {this.items.occupation} </h4>
					<div className = "about-me-tech"> 
						{this.items.technologies} 
					</div>
					<br></br>
					<div className = "about-me-goal"> 
						{this.items.goal} 
					</div>
					<a 	href="https://www.linkedin.com/in/joestowers/"
						target="_blank">
						<img className= "video-link"
							src= "/img/LinkedIn100px.png" alt="LinkedIn"/>
					</a>
				</div>
				<div className = "col-sm-8 main-photo">
					<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
				</div>
			</div>
		)
	}
}

export default AboutMeDetail