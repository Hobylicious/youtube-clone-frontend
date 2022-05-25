import React from 'react'

export default function VideoCards({ videoLink }) {
	
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
	 videoLink.data.items.map((video, index) => )
  return (
    <div>
		  <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images'/>
    </div>
  )
}
