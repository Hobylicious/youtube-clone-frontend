import React, { useState } from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	//  Declare a place holder for the video before loading a new outline
	const [video, setVideo] = (`https://www.youtube.com/watch?v=wM7zqDG5Iws`)

	const url = `https://www.youtube.com/watch?v=${videoId}`

	setVideo(url)

	// console.log(video)
	return (
		// <div className='video-window'
		<div>
			<ReactPlayer url={vi} />
		</div>

	)
}
