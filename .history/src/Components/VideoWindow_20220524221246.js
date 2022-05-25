import React from 'react'
import ReactPlayer from 'react-player'
import Video from 'react-native-video'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`
console.log(url)
	return (

		
		// <div className='video-window'>


	
		<Video
			source={url}
			style={{ width: 300, height: 300 }}
			controls={true}
			ref={(ref) => {
				this.player = ref
			}} />	
	
		
		
			
			
		


		

	)
}
