import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`

	return (

		
		// <div className='video-window'>


		
		<video >
			<source src={url} />
		</video>
		
			
			console.log(url)
		


		// </div>

	)
}
