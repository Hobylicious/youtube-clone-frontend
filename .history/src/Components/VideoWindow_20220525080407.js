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
		url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			<>
				<iframe title =''src={url} />
				{/* <div>
					<ReactPlayer className='ytp-cued-thumbnail-overlay-image' url={url} />
				</div> */}
				<button className='ytp-menuitem-label' ><ImLoop/></button>
			</>
		)
	}
	else if (videoId.length > 1) {
		url = `https://www.youtube.com/watch?v=${videoId}`
		return (
			// <div className='video-window'
			<>
				<div>
					<ReactPlayer url={url} />
				</div>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		)
	}

	
}
