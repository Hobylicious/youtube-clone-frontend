import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videos, suggestedVodeos }) => {

	console.log(videos[0])

	// { videoId, videos, videoStat, likes, views}

	function viewsFunc(num) {
		if (num < 1000) return num;
		else if ((num > 999) && (num < 1000000)) {
			num = (num / 1000).toFixed(1);
			return num + 'K';
		}
		else if ((num >= 1000000) && (num < 1000000000)) {
			num = (num / 1000000).toFixed(1);
			return num + 'M';
		}

		else if ((num > 1000000000) && (num < 1000000000000)) {
			num = (num / 1000000000).toFixed(1);
			return num + 'B';
		}
	}

	// // This is for safety; if there is no result, just consolelog.
	if (videos.length < 1) {
		console.log("No result found")
	}


	// This return all clickable thumbnails cards.
	else {
		return (
			<div className="cards car" >
				{videos.map((video, index) =>

					video.type === 'video' && (
						<Link className='link' to={`/videoPlayer/${video.id}`}>

							< div className='single-card' key={index} >

								<img className='image' src={video.thumbnails[0].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }} />

								<div className="video-description">

									<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }}>Title: {video.title}</p>
									<div className='logo-cannel-views' >
										<img width={20} src={`${video.author.avatars[0].url}`} alt="" />
										<div>
											<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`} target='_blank' rel='noreferrer'>Channel: {video.author.name}</a>
											<p className='views'>Views: {viewsFunc(video.views)}</p>
											<p className='views'>Posted: {video.uploadedAt}</p>
											<p className='views'>Duration: {video.duration}</p>
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

