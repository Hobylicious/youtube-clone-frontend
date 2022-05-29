import React from 'react';

// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	// This return all clickable thumbnails cards.
	else {

		const list = videoLink.data.items;
		{
			
		}
		
	}
}

export default VideoCards;