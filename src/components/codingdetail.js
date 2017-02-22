import React from 'react';

const CodingDetail = (props) => {

	console.log('CodingDetail props =', props);

	return (
		<div className = "row">
			<div className = "col-sm-4">
				<a href="https://github.com/jstowers">
					<img src= "/img/GitHub120px.png" alt= "Github"/>
				</a>
			</div>
			<div className = "col-sm-8">
				<img src="/img/JoeProfilePhoto.jpg" alt="JoeStowers" />
			</div>
		</div>
	)
}

export default CodingDetail