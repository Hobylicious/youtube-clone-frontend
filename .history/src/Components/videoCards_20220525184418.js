import React from 'react'

export default function VideoCards({ videoLink }) {

	if (videoLink.length < 1) {
		console.log("No result found")
	}

	else if (videoLink.length > 0) {
		// let url = `${videoLink.data.items[0].snippet.thumbnails.default.url}`;
		// <img src={url} alt='images' />
		console.log(videoLink.data)

		return (

			<src = ``${videoLink.data.items[0].snippet.thumbnails.default.url }`/>
			
				// <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
			
		)
	}

}
