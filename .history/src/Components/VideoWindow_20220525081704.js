import React from 'react'
import ReactPlayer from 'react-player'
import { ImLoop } from "react-icons/im";


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	let url = '';

	// const replayButton = document.querySelector('.ytp-menuitem-label')
	// console.log(replayButton)

	// const playVideo = document.querySelector('.ytp-large-play-button')

	// Put a video video holder if the user has not submitted a request for video.
	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			<>
				<iframe width="420" height="315" src={url} frameborder="0" allowfullscreen></iframe>
				{/* <div>
					<ReactPlayer className='ytp-cued-thumbnail-overlay-image' url={url} />
				</div> */}
				<button className='ytp-menuitem-label' ><ImLoop/></button>
			</>
		)
	}
	else if (videoId.length > 1) {
		url = `https://www.youtube.com/watch_popup?v=${videoId}`
		return (
			// <div className='video-window'
			<>
				<div>
					<iframe width="650" height="315" src={url} frameborder="0" allowfullscreen></iframe>
				</div>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		)
	}

	
}
