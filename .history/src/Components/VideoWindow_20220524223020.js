import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`
console.log(url)
	return (

		
		// <div className='video-window'>


		<div>
		<Video
			source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
			style={{ width: 300, height: 300 }}
			controls={true}
			ref={(ref) => {
				this.player = ref
			}} >	
		</div>
		
		
			
			
		


		

	)
}
