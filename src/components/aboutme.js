import React, { Component } from 'react';

import NavBar from './navbar';
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
		console.log('event =', event)
		this.setState({showMe: !this.state.showMe});
	}

	render() {

		if(!this.state.showMe){
			return (
				<div>
					<button
						className= 'btn btn-primary' 
						onClick= { (event) => this.onClick() }> About
					</button>
				</div>
			)
		}

		else {
			return (
				<div className="col-sm-4">
					<button
						className= 'btn btn-primary' 
						onClick= { (event) => this.onClick() }> About
					</button>
					<AboutMeDetail />
				</div>
			)
		}
	}
}

export default AboutMe

// {this.state.showMe && <AboutMeDetail />}