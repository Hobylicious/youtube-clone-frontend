import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_?v=${videoId}`

	return (

		// console.log(url)
		// <div className='video-window'>


		
		<video >
			<source src={url} />
		</video>
		
			
			
		


		// </div>

	)
}
