import React from 'react';

const PassionsDetail = (props) => {

	const musicVideos = [
		{
			title: 'Safari',
			artist: 'J Balvin',
			url: 'https://www.youtube.com/watch?v=JWESLtAKKlU',
			img: '/img/PassionsSafari.png'
		},
		{
			title: '35 Pa Las 12',
			artist: 'Fuego',
			url: 'https://www.youtube.com/watch?v=rh93WCJG1sM',
			img: '/img/Passions35.png'
		},
		{
			title: 'Lost On You',
			artist: 'LP',
			url: 'https://www.youtube.com/watch?v=wDjeBNv6ip0',
			img: '/img/PassionsLost.png'
		}
	];

	const videoItems = musicVideos.map((video,index) => {
		return (
			<a key={index} href= {video.url} target="_blank">
				<img 
					className = 'video-link'
					src= {video.img}
					alt= {video.title} />
			</a>
		);
	});

	return (
		<div>
			{ videoItems }
		</div>
	);
}

export default PassionsDetail
