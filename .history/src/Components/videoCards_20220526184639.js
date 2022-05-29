import React from 'react';

// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	// This
	else {
		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (
					< div key={index} >
						<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => {document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`}}/>
					</div>
				))}

			</div>
		)
	}
}

export default VideoCards;


// { console.log(`https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId} Well`) }


// import React from 'react'

// export default function VideoCards({ videoLink }) {



// 	if (videoLink.length < 1) {
// 		console.log("No result found")
// 	}

// 	else if (videoLink.length > 0) {

// 		console.log(videoLink.data.items)
// 		// console.log(videoLink.data)
// 		// let url = `${videoLink.data.items[0].snippet.thumbnails.default.url}`;
// 		return (
// 			// <img src={url} alt='images' />
// 			// <div>
// 			// 	<img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
// 			// </div>
// 			// <div>
// 			// 	<img src="https://www.etsy.com/listing/764343506/earth-svg-planet-earth-png-world-dxf?gpla=1&gao=1&" alt="xyz" />
// 			// </div>
// 			<h1>Hello</h1>



// 		)
// 	}

// }
