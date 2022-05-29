import React from 'react';

// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	
	// This return all clickable thumbnails cards.
	else {
		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (
					< div key={index} >
						<img className='single-card' src={video.snippet.thumbnails.medium.url} alt='images' width="150" height="100" onClick={() => {document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`}}/>
					</div>
				))}

			</div>
		)
	}
}

export default VideoCards;


