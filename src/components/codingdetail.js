import React from 'react';

const CodingDetail = (props) => {

	console.log('CodingDetail props =', props);

	return (
		<div className = "row">
			<div className = "col-sm-4">
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
			<div className = 'col-sm-8 main-photo'>
				<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
			</div>
		</div>
	)
}

export default CodingDetail