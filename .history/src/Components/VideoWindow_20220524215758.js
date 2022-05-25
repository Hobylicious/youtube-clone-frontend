import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {
	return (

		const url = `https://www.youtube.com/watch?v=SQ94-kdF45k`
		// <div className='video-window'>
		// 	<ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k" />
		// </div>
		// <a href='https://www.youtube.com/watch?v=SQ94-kdF45k'>dfdfd</a>
		<div className='video-window'>
		

			

			<video key={url}>
				<source src={url} />
			</video>

			
		</div>

	)
}
