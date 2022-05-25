import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch?v=${videoId}`
	console.log(url)
	return (
		// <div className='video-window'
		<>
			<div>
				<ReactPlayer url={url} />
				<ControlBar autoHide={false}>
					<ReplayControl seconds={5} order={2.1} />
					<ReplayControl seconds={10} order={2.2} />
					<ReplayControl seconds={30} order={2.3} />
				</ControlBar>
		</div>
		<button className='ytp-menuitem-label'>Label</button>
		</>
		

	)
}
