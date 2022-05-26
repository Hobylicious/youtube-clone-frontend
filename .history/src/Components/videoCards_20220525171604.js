import React from 'react'

export default function VideoCards({ videoLink }) {
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

	return (
		videoLink.data.items.aforEach(element => {
			
		}); (
			<img src={video.snippet.thumbnails.default.url} alt='images'/>
		)
	
	   )
    
  )
}
