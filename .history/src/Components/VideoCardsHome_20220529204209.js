import React from 'react';
import { Link } from 'react-router-dom';



const VideoCardsHome = ({ videos, suggestedVideos }) => {

	console.log(suggestedVideos)

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

	// This is for safety; if there is no result, just consolelog.
	if (suggestedVideos.length < 1) {
		console.log("No result found")
	}


	// This return all clickable thumbnails cards.
	else {
		return (
			<div className="cards car" >
				{suggestedVideos.map((s, index) =>

					video.type === 'video' && (
						<Link className='link' to={`/videoPlayer/${video.id}`}>

							< div className='single-card' key={index} >

								<img className='image' src={video.thumbnails[0].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }} />

								<div className="video-description">
									<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }}>Title: {video.title}</p>
									<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`} target='_blabk'>Channel: {video.author.name}</a>
									<p className='views'>Views: {viewsFunc(video.thumbnails.views)}</p>
									<p className='views'>Posted: {video.thumbnails.uploadedAt}</p>

								</div>
							</div>
						</Link>
					))}

			</div>
		)
	}
}


export default VideoCardsHome;
