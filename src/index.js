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
				<h1>Joe Stowers</h1>
				<NavBar />
				
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));