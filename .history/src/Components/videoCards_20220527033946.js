import React from 'react';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink, videoStat }) => {

	function viewsNum(num) {
		if (num < 1000) return num;
		else if ((num > 999) && (num < 1000000)) {
			num = num / 1000;
			return num + 'K';
		}
		else if ((num >= 1000000) && (num < 1000000000)) {
			num = num / 1000000;
			return num + 'M';
		}

		else if ((num > 1000000000) && (num < 1000000000000)) {
			num = num / 1000000000;
			return num + 'B';
		}

		
			
	}

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}


	// This return all clickable thumbnails cards.
	else {


		console.log(videoLink.data.items[0]);
		let videostatics = videoStat.data.items;
		console.log(videostatics)

		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (

					< div key={index} >

						<div className='video-description'>

							<div className='card'>
								<img className='single-card' src={video.snippet.thumbnails.high.url} alt='images' width="150" height="100" onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />
							</div>


							<div className="meta">
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>By: {video.snippet.channelTitle}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Views: {viewsNum(videoStat[index].statistics.viewCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Favorites: {viewsNum(videoStat[index].statistics.favoriteCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Likes: {viewsNum(videoStat[index].statistics.viewCount)}</p>

								{/* <li>Views: {item.views}</li>
								<li>Duration: {item.duration}</li>
								<li>Uploaded: {item.uploadedAt}</li> */}
							</div>

						</div>


					</div>
				))}

			</div>
		)
	}
}

export default VideoCards;


