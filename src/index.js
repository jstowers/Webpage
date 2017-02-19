import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar';

const App = () => {
	return (
		<div>
			<h2>Joe Stowers</h2>
			<NavBar />
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));