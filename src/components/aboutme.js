import React, { Component } from 'react';

import AboutMeDetail from './aboutmedetail';

class AboutMe extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			showMe: false
		}
	}

	onClick() {
		event.preventDefault;
		console.log('The button was clicked');
		this.setState({showMe: true});
		console.log('state', this.state);
	}

	/*
	onClick(event) {
		event.preventDefault;
		//event.currentTarget.style.backgroundColor = '#ccc';
		console.log('event', event);
		console.log('this.state before = ', this.state);
		this.setState({showMe: true});
		console.log('this.state after = ', this.state);


		return (

			<h2>HELLO</h2>
		)
	}
	*/

	render() {
		
		return (
			<div>
				<button
					className= 'btn btn-primary' 
					onClick= { (event) => this.onClick() }> About
				</button>
			</div>
		)
	}
}

export default AboutMe

// {this.state.showMe && <AboutMeDetail />}