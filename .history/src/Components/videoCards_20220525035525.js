import React from 'react'

export default function VideoCards({ videoLink }) {

	if (videoLink.length > 0) {
			console.log(videoLink.data.items)
	//console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
	// videoLink.data.items.map((video, index) => (
		
		
	// 		<img src={video.snippet.thumbnails.default.url} alt='images' />
		
	// )
	// )
	}

	else {
		console.log(No videos)
	}


}
