import React from 'react'

export default function VideoCards({ videoLink }) {
	
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
videoLink.map(video, )
  return (
    <div>
		  <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images'/>
    </div>
  )
}
