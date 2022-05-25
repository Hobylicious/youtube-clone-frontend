import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`
	console.log(url)
	return (


		// <div className='video-window'
		<div>
			<ReactPlayer url={url} />
		</div>


	)
}
