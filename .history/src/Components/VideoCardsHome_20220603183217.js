import React from 'react';
import { Link } from 'react-router-dom';



const VideoCardsHome = ({ videos, suggestedVideos }) => {

	//  console.log(videos)

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
			<div className="cards car" >
				{videos.map((video, index) =>

					video.type === 'video' && (
						<Link className='link' to={`/videoPlayer/${video.id}`}>

							< div key={video.id} className='single-card' >

								<img className='channel-logo' width='25' height='25' src={`${video.author.avatars[0].url}`} alt="" />

								<div className="video-description">
									<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }}>Title: {video.title}</p>
									<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`} target='_blabk'>Channel: {video.author.name}</a>
									<p className='views'>Views: {viewsFunc(video.views)}</p>
									<p className='views'>Posted: {video.uploadedAt}</p>
									<p className='views'>Duration: {video.duration}</p>

								</div>
							</div>
						</Link>
					))}

			</div>
		)
	}
}


export default VideoCardsHome;

