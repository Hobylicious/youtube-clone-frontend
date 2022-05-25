import React from 'react'

export default function VideoCards({ videoLink }) {

	console.log()

	// console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
	videoLink.map((video, index) => (
		
		<div>
			<img src={video.snippet.thumbnails.default.url} alt='images' />
		</div>
	)
	)

}
