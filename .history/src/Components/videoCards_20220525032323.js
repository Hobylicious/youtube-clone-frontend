import React from 'react'

export default function VideoCards({ videoLink }) {

	console.log(videoLink)
	if (videoLink.length > 0) {
		videoLink.map((video) => (

			console.log(video)
			
			// <div>
			// 	<img src={video.snippet.thumbnails.default.url} alt='images' />
			// </div>
		));
	}

		else if (videoLink.length < 0) {
			 <img src='https://i.ytimg.com/vi/noHz5ARqNWg/default.jpg' alt='images' />
		}
		

		//console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
  
	
}