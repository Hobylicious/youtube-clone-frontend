import React from 'react'
import ReactPlayer from 'react-player'
import { ImLoop } from "react-icons/im";


export default function VideoWindow({ videoId, videoLink, videoStat }) {

console.log(videoLink)

	let url = '';
	let image = '';

	const image = videoLink.data.items[0].snippet.thumbnails.medium.url;
	console.log(image)

	// const replayButton = document.querySelector('.ytp-menuitem-label')
	// console.log(replayButton)

	// const playVideo = document.querySelector('.ytp-large-play-button')

	// Put a video video holder if the user has not submitted a request for video.
	if (image.length < 1) {
		url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			
			<>
				
				<img src={image} alt="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2021%2F07%2F02%2Fgettyimages-567892009_wide-da3a2531180b912801eb28606a149a56ccb4c738-s1100-c50.jpg&imgrefurl=https%3A%2F%2Fwww.npr.org%2Fsections%2Fdeceptivecadence%2F2021%2F07%2F02%2F1012655179%2F70-new-ways-to-think-about-america-the-beautiful&tbnid=vSV8eqmmiTbgzM&vet=12ahUKEwi1n-Xvjfr3AhUFZ80KHYWIBJMQMyhSegUIARCnAQ..i&docid=vz6PQvLPXredBM&w=1100&h=618&q=america&ved=2ahUKEwi1n-Xvjfr3AhUFZ80KHYWIBJMQMyhSegUIARCnAQ" />

				{/* <div>
					<ReactPlayer url={url} />
				</div> */}
				<button className='ytp-menuitem-label' ><ImLoop/></button>
			</>
		)
	}
	else if (image.length > 1) {
		// url = `https://www.youtube.com/watch?v=${videoId}`
		src={image}
		return (
			// <div className='video-window'
			<>
				<img src={image} alt="" />
				{/* <div>
					<ReactPlayer url={url} />
				</div> */}
				<button className='ytp-menuitem-label'>Label</button>
			</>
		)
	}

	
}
