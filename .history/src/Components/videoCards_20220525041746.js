import React from 'react'

export default function VideoCards({ videoLink }) {
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

	return (
		videoLink.data.items.map((video, index) => {
			return {
			  <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images'/>
		  }
	  } )
    <div>
		  
    </div>
  )
}