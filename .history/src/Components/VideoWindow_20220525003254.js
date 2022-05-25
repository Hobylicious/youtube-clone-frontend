import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	// Put a video video holder 
	if ()

	const url = `https://www.youtube.com/watch?v=${videoId}`
	console.log(url)
	return (
		// <div className='video-window'
		<>
			<div>
				<ReactPlayer url={url} />
				
		</div>
		<button className='ytp-menuitem-label'>Label</button>
		</>
		

	)
}
