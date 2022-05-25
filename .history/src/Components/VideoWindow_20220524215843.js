import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch?v=SQ94-kdF45k`

	return (

		const url = `https://www.youtube.com/watch?v=SQ94-kdF45k`
		// <div className='video-window'>
		// 	<ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k" />
		// </div>
		// <a href='https://www.youtube.com/watch?v=SQ94-kdF45k'>dfdfd</a>
			
				{/* <iframe
				src="https://www.youtube.com/embed/SQ94-kdF45k"
				frameborder="0"
				allow="autoplay; encrypted-media"
				height="300"
				width="643.1"
				title="video"
			/>{" "} */}
		<div className='video-window'>
		

			

			<video key={url}>
				<source src={url} />
			</video>

			
		</div>

	)
}
