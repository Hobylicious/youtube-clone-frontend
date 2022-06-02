import React from 'react'
// import ReactPlayer from 'react-player'
// import { ImLoop } from "react-icons/im";


export default function VideoWindow({videos}) {

	// console.log(videoLink)

	let url = '';

	// const replayButton = document.querySelector('.ytp-menuitem-label')
	// console.log(replayButton)

	// const playVideo = document.querySelector('.ytp-large-play-button')


	// Put a video video holder if the user has not submitted a request for video.
	if (!videos){
		url = `https://www.youtube.com/watch_popup?v=jbnddQ9l0IA`
		return (
			// <div className='video-window'
			<>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		)
	}

	else {
		

	}

	
	



}



