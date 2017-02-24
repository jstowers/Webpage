import React from 'react';

const CodingDetail = (props) => {

	return (
		<div>
			<a href="https://github.com/jstowers">
				<img
					className= "coding-link center-block" 
					src= "/img/GitHub120px.png" alt= "Github"/>
			</a>
			<a href="https://sounddeck.herokuapp.com/" target="_blank">
				<img
					className= "coding-link center-block" 
					src= "/img/SoundDeck120px.png"/>
			</a>
		</div>
	);
}

export default CodingDetail