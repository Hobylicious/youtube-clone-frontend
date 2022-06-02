import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat } ) {
	return (
		
		<div className='video-window'>
			<ReactPlayer url=httphttps://www.youtube.com/watch?v=${'videoId'}'/>
			
		</div>
	)
}
