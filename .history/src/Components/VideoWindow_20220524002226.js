import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat } ) {
	return (
		
		<div className='video-window'>
			<iframe src='https://www.youtube.com/watch?v=SQ94-kdF45k'></iframe>
			{/* <ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k"/> */}
			
		</div>
	)
}
