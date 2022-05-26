import React from 'react'

export default function VideoCards({ videoLink }) {

	console.log(videoLink)

	if (videoLink.length < 1) {
		console.log("No result found")
	}

	else if (videoLink.length > 0) {
		

		return (
			
		<img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
			
		)
	}

}
