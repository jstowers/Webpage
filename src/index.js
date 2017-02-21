import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';
import AboutMe from './components/aboutme';
import AboutMeDetail from './components/aboutmedetail';

class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedTab: null
		}
	}

	render() {
		return (
			<div>
				<h2>Joe Stowers</h2>
				<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
				<AboutMe />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));