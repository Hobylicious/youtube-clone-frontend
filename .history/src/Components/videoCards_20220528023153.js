import React from 'react';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videos, videoStat, likes, views }) => {

	console.log(videos)

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
	// if (views.length < 1) {
	// 	console.log("No result found")
	// }


	// // This return all clickable thumbnails cards.
	videos.
	return (videos && (
		<div className="videosContainer">
			{videos.data.items.map((video, index) => (

				< div className='single-card' key={index} >

					<img className='image' src={video.snippet.thumbnails.high.url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />


					<div className="video-description">
						<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Title: {video.snippet.title.charAt(0).toUpperCase()}{video.snippet.title.substring(1).toLowerCase()}</p>
						<a className='channel-id' href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>Channel: {video.snippet.channelTitle.toLowerCase().charAt(0).toUpperCase()}{video.snippet.channelTitle.substring(1).toLowerCase()}</a>
						<p className='views'>Views: {viewsFunc(views)}</p>
						<p className='views' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=T69CmY6Kc5g&list=${videoId[index].id.playlistId}` }}>Posted on: {video.snippet.publishedAt.substring(5, 7)}/{video.snippet.publishedAt.substring(8, 10)}/{video.snippet.publishedAt.substring(0, 4)} at {video.snippet.publishedAt.substring(11, 13)}:{video.snippet.publishedAt.substring(5, 7)}</p>

					</div>
				</div>

			))}

		</div>

	)

	)
}


export default VideoCards;



{/* <p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Views: {viewsNum(videoStat.items[index].statistics.viewCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Favorites: {viewsNum(videoStat.items[index].statistics.favoriteCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Likes: {viewsNum(videoStat.items[index].statistics.likeCount)}</p>
								<p onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Uploaded at: {videoStat.items[index].snippet.publishedAt.subString(5, 7)}/{videoStat.items[index].snippet.publishedAt.subString(8, 10)}/{videoStat.items[index].snippet.publishedAt.subString(0, 4)} {videoStat.items[index].snippet.publishedAt.subString(11, 13)}:{videoStat.items[index].snippet.publishedAt.subString(14, 16)}</p> */}