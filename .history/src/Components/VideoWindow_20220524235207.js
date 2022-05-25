import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	//  Declare a place holder for the video before loading a new

	const url = `https://www.youtube.com/watch?v=${videoId}`
	console.log(url)
	return (
		// <div className='video-window'
		<div>
			<ReactPlayer url={url} />
		</div>

	)
}
