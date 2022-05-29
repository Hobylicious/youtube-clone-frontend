import React from 'react'
// import ReactPlayer from 'react-player'
// import { ImLoop } from "react-icons/im";


export default function VideoWindow({ videoId, videoStat, views, videoLink }) {

	// console.log(videoLink)

	let url = '';

	// const replayButton = document.querySelector('.ytp-menuitem-label')
	// console.log(replayButton)

	// const playVideo = document.querySelector('.ytp-large-play-button')

	// This return all clickable thumbnails cards.
	if (views > 0) {
		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (

					< div className='single-card' key={index} >

						<img className='image' src={video.snippet.thumbnails.high.url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />


						<div className="video-description">
							<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Title: {video.snippet.title.charAt(0).toUpperCase()}{video.snippet.title.substring(1).toLowerCase()}</p>
							<a className='channel-id' href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>Channel: {video.snippet.channelTitle.toLowerCase().charAt(0).toUpperCase()}{video.snippet.channelTitle.substring(1).toLowerCase()}</a>
							<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=T69CmY6Kc5g&list=${videoId[index].id.playlistId}` }}>Playlist: Playlist</p>
							{/* <p className='views'>Views: {viewsFunc(views)}</p> */}

						</div>
					</div>

				))}

			</div>
		)
	}
	
	



