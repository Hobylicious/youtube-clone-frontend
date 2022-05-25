import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch?v=SQ94-kdF45k`

	return (
		
		console
		<div className='video-window'>
		

			

			<video key={url}>
				<source src={url} />
			</video>

			
		</div>

	)
}
