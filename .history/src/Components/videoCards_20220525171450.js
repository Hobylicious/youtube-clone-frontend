import React from 'react'

export default function VideoCards({ videoLink }) {
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

	return (
		videoLink.data.items.forEach(element => {
			console.log
			<img src={element.snippet.thumbnails.default.url} alt='images'/>
		}) 
	
	
    
  )
}
