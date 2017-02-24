import React from 'react';

const PassionsDetail = (props) => {

	return (
		<div>
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
	);
}

export default PassionsDetail