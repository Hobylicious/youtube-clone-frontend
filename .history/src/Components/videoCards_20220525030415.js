import React from 'react'

export default function VideoCards({ videoLink }) {
	
	videoLink.length > 0 ? {
		
		return(

		)
	}
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

  return (
    <div>
		  <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images'/>
    </div>
  )
}
