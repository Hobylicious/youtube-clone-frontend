import React from 'react'

export default function VideoCards({ videoLink }) {

	console.log(videoLink.data.items)

	if (videoLink.length < 1) {
		console.log("No result found")
	}

	else if (videoLink.length > 0) {
		console.log(videoLink.data)
		let url = `${videoLink.data.data.items[0].snippet.thumbnails.default.url}`;
		return (


			<img src={url} alt='images' />


			// <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />

		)
	}

}
