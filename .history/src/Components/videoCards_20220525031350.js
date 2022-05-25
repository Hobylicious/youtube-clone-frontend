import React from 'react'

export default function VideoCards({ videoLink }) {

	if (videoLink.length > 0) {
		videoLink.map((video) => (
			
			<div>
				<img src={video.data.items[0].snippet.thumbnails.default.url} alt='images' />
			</div>console.log(video)
		))

		return (
			<img src='https://i.ytimg.com/vi/noHz5ARqNWg/default.jpg' alt='images' />
		)

		//console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
  
	}
}