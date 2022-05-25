import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	let url = '';

	const replayButton = rea('.ytp-menuitem-label')
	console.log(replayButton)

	React.getElementByClassName('ytp-ad-overlay-image').src = '';

	// Put a video video holder if the user has not submitted a request for video.
	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
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
	else if (videoId.length > 1) {
		url = `https://www.youtube.com/watch?v=${videoId}`
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

	
}