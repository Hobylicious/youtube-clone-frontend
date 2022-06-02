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


		// console.log(videoLink.data.items);
		let videostatics = videoStat.data;
		console.log(videostatics)

		let channelIcon = document.getElementsByClassName('ytp-title-channel-logo');
		console.log(channelIcon)
		

		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (

					< div className='single-card' key={index} >

						<img className='image' src={video.snippet.thumbnails.high.url} alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />


						<div className="video-description">
							<h5 onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Title{video.snippet.title.toLowerCase()}</h5>
							<a className='channel-id' href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>Channel: {video.snippet.channelTitle.toLowerCase().charAt(0).toUpperCase()}{video.snippet.channelTitle.substring(1).toLowerCase()}</a>
							<p className='channel-id'>Views: </p>
						</div>
					</div>

				))}

			</div>
		)
	}
}

export default VideoCards;



{/* <p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Views: {viewsNum(videoStat.items[index].statistics.viewCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Favorites: {viewsNum(videoStat.items[index].statistics.favoriteCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Likes: {viewsNum(videoStat.items[index].statistics.likeCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Uploaded at: {videoStat.items[index].snippet.publishedAt.subString(5, 7)}/{videoStat.items[index].snippet.publishedAt.subString(8, 10)}/{videoStat.items[index].snippet.publishedAt.subString(0, 4)} {videoStat.items[index].snippet.publishedAt.subString(11, 13)}:{videoStat.items[index].snippet.publishedAt.subString(14, 16)}</p> */}