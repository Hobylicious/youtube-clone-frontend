import React from 'react'
// import ReactPlayer from 'react-player'
// import { ImLoop } from "react-icons/im";


export default function VideoWindow({videos}) {

	// console.log(videos)

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
		// This return all clickable thumbnails cards.
<>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		return (


// <div className='video-window'
			


			<div className="videosContainer">
				{videos.map((video, index) => (

				< div className='single-card' key={index} >

					<img className='image' src={video.thumbnails.url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }} />


					<div className="video-description">
						<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}}` }}>Title: {video.title.charAt(0).toUpperCase()}{video.title.substring(1).toLowerCase()}</p>
						<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`}>Channel: {video.author.name.toLowerCase().charAt(0).toUpperCase()}{video.author.name.substring(1).toLowerCase()}</a>

						<p className='date'>Posted: {video.author.uploadedAt}</p>

					</div>
				</div>

				 ))} 

			</div>
		)
	}


	

	
	



}



