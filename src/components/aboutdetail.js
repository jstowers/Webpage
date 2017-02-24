import React, { Component } from 'react';

// AboutMeDetail prints the information when the About button is clicked.
const AboutDetail = (props) => {
	
	const items = {
		punchline: 'Positively driven, Creatively built',
		occupation: 'Software Engineer',
		technologies: 'JavaScript, React, Angular, Node, MongoDB',
		goal: 'Seeking a full-stack web developer job that provides an outlet for my creativity and problem-solving skills.  ' + 
		'Stir in a challenge, sprinkle with beauty, and savor the goodness.'
		
	}

	return (
		<div>
			<h2> {items.punchline} </h2>
			<h4> {items.occupation} </h4>
			<div className = "about-me-tech"> 
				{items.technologies} 
			</div>
			<br></br>
			<div className = "about-me-goal"> 
				{items.goal} 
			</div>
			<a 	href="https://www.linkedin.com/in/joestowers/"
				target="_blank">
				<img className= "video-link"
					src= "/img/LinkedIn100px.png" alt="LinkedIn"/>
			</a>
		</div>
	);
}

export default AboutDetail