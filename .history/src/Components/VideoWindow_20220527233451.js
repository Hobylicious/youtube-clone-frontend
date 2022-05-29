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
	if (videos){
		url = `https://www.youtube.com/watch_popup?v=jbnddQ9l0IA`
		return (
			// <div className='video-window'
			<>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		)
	}

	// This return all clickable thumbnails cards.

		return ( videos && 
			<div className="videosContainer">
				{/* {videos.map((video, index) => ( */}

				< div className='single-card' key={0} >
					< div className='single-card' key={0} ></div>

					<img className='image' src={videos[0].thumbnails[1].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videos[0].id}` }} />


					<div className="video-description">
						<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videos[0].id}}` }}>Title: {videos[0].title.charAt(0).toUpperCase()}{videos[0].title.substring(1).toLowerCase()}</p>
						<a className='channel-id' href={`https://www.youtube.com/channel/${videos[0].author.channelID}`}>Channel: {videos[0].author.name.toLowerCase().charAt(0).toUpperCase()}{videos[0].author.name.substring(1).toLowerCase()}</a>
						
						<p className='date'>Posted: {videos[0].author.uploadedAt}</p>

					</div>
				</div>

				{/* ))} */}

			</div>
		)
	}

	



}



