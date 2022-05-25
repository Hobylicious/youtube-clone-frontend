import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat } ) {
	return (
		
		<div className='video-window'>

			<a href=`https://www.youtube.com/watch?v=SQ94-kdF45k`></a>
			
			<ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k"/>
			
		</div>
	)
}
