import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videos, suggestedVodeos, viewsFunc }) => {

	// // This is for safety; if there is no result, just consolelog.
	if (videos.length < 1) {
		return (
			<div id="myModal" className="modal">
				<div className="modal-content">
					<h1>Please wait...</h1>
				</div>
			</div>
		)
	}


	// This return all clickable thumbnails cards.
	else {
		return (
			<div className="cards-player" >
				{videos.map((video, index) =>

					video.type === 'video' && (
						<Link className='link' to={`/videoPlayer/${video.id}`}>
							< div key={video.id} className='single-card-player '  >
								<img className='image-player' src={video.thumbnails[0].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }} />
								<div className="video-description">
									<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }}>Title: {video.title}</p>
									<div className='logo-cannel-views-posted-duration' >
										<div className='channel-info' >
											<div className='logo-channelName'>
												<img className='channel-logo' width='25' height='25' src={`${video.author.avatars[0].url}`} alt="" />
												<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`} target='_blank' rel='noreferrer'>{video.author.name}</a>
											</div>
											<div className='views-posted-duration' >
												<p className='views'>Views: {viewsFunc(video.views)}</p>
												<p className='views'>Posted: {video.uploadedAt}</p>
												<p className='views'>Duration: {video.duration}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>

		)
	}

}


export default VideoCards;

