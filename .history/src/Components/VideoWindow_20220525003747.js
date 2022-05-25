import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	let url = '';

	// Put a video video holder if the user has not submitted a request for video.
	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
			<>
			<div>
				<ReactPlayer url={url} />
			</div>
			<button className='ytp-menuitem-label'>Label</button>
		</>
	}
	else if ()

	url = `https://www.youtube.com/watch?v=${videoId}`
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
