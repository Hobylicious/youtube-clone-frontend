import React from 'react';

// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink, videoStat }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	// This return all clickable thumbnails cards.
	else {

		// console.log(videoLink.data.items[0])
		// console.log(videoStat)

		const videoStatistics = videoStat.data.items[0];
		console.log(videoStatistics)

		return (

			<div>
				
				{/* videoLink.data.items &&
				(videoLink.data.items.length === 0
				? <p>No results</p>
				: (
				<ul className="items">
					{videoLink.data.items.map((video, index) => (
						<li className="item" key={index}>
							<div>
								<b><a href=`https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`>{video.snippet.title}</a></b>
								<p>{video.snippet.title}</p>
							</div>
							<ul className="meta">
								<li>By: <a href=`https://www.youtube.com/channel/${video.snippet.channelId}`>{video.snippet.channelTitle}</a></li>
								<li>Views: {.views}</li>
								<li>Duration: {item.duration}</li>
								<li>Uploaded: {item.uploadedAt}</li>
							</ul>
							<img alt="" src={item.bestThumbnail.url} height="75" />
						</li>
					))}
				</ul>
				)
				) */}




				< div className="videosContainer" >
					{
						videoLink.data.items.map((video, index) => (
							< div key={index} >
								<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />
							</div>
						))
					}
				</ div>


			</div>



		)
	}


}

export default VideoCards;