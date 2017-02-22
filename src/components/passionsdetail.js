import React from 'react';

const PassionsDetail = (props) => {

	console.log('PassionsDetail props =', props);

	return (
		<div className = "row">
			<div className = "col-sm-4">
				<a 	href="https://www.youtube.com/watch?v=JWESLtAKKlU"
					target="_blank">
					<img 
						className="video-link"
						src= "/img/PassionsSafari.png" alt="Safari"/>
				</a>
				<a 	href="https://www.youtube.com/watch?v=rh93WCJG1sM"
					target="_blank">
					<img 
						className="video-link"
						src= "/img/Passions35.png" alt= "35PaLa12" />
				</a>
				<a 	href="https://www.youtube.com/watch?v=wDjeBNv6ip0"
					target="_blank">
					<img 
						className="video-link"
						src= "/img/PassionsLost.png" alt= "LostOnYou" />
				</a>
			</div>
			<div className = 'col-sm-8 main-photo'>
				<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
			</div>
		</div>
	)
}

export default PassionsDetail