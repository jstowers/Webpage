import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';

class App extends Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div>
				<NavBar />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));