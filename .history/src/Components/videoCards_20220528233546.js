import React from 'react';
import { Link } from 'react-router-dom';



// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videos, videoStat, likes, views }) => {

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
		return (videos && (
			<div className="videosContainer-home videosContainer-player">
				{videos.data.items.map((video, index) => (
					<Link to='/videoPlayer'>
						< div className='single-card-home single-card-player' key >

							<img className='image-home image-player' src={video.snippet.thumbnails.high.url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id.videoId}` }} />


							<div className="video-description-home video-description-player" key={2}>
								<p className='title-home title-player' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id.videoId}` }}>Title: {video.snippet.title.charAt(0).toUpperCase()}{video.snippet.title.substring(1).toLowerCase()}</p>
								<a className='channel-id-home channel-id-player' href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target='_blabk'>Channel: {video.snippet.channelTitle.toLowerCase().charAt(0).toUpperCase()}{video.snippet.channelTitle.substring(1).toLowerCase()}</a>
								<p className='views-home views-player'>Views: {viewsFunc(views[index])}</p>
								<p className='views-home views-player' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=T69CmY6Kc5g&list=${video.id.playlistId}` }}>Posted on: {video.snippet.publishedAt.substring(5, 7)}/{video.snippet.publishedAt.substring(8, 10)}/{video.snippet.publishedAt.substring(0, 4)}</p>

							</div>
						</div>

					</Link>))}


				<button  >Send</button>

			</div>

		)

		)
	}




}


export default VideoCards;

