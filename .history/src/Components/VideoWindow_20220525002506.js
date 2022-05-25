import React from 'react'
import ReactPlayer from 'react-player'
// Src: 
import { Player, ControlBar, ReplayControl } from 'video-react';


export default function VideoWindow({ videoId, videoLink, videoStat }) {

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
