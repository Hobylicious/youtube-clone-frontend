import React from 'react'

export default function VideoCards({ videoLink }) {

	const [videos, setVideos] 
	
	
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)
	videoLink.data.itemd.map((video, index) => {
})
  return (
    <div>
		  <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images'/>
    </div>
  )
}
