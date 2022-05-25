import React, { useState } from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	//  Declare a place holder for the video before loading a new outline
	const [video, setVideo] = (`https://www.youtube.com/watch?v=yKJVlADjpus`)

	setVideo(`https://www.youtube.com/watch?v=${videoId}`)
	console.log(video)
	return (
		// <div className='video-window'
		<div>
			<ReactPlayer url={''https://www.youtube.com/watch?v=yKJVlADjpus'} />
		</div>

	)
}
