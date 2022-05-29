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
		// console.log(videoStatistics)

		return (

			<div>

				<ul className="items">
					{videoLink.data.items.map((video, index) => (

						<li className="item" key={index}>
							
							<div>
								<b>
									<a href=
									</b>
							
								<p>{video.snippet.title}</p>
							
							</div>
						
							<ul className="meta">
								<li>By: <a href=`https://www.youtube.com/channel/${video.snippet.channelId}`>{video.snippet.channelTitle}</a></li>
								<li>Views: {videoStatistics.statics.viewCount}</li>
								<li>Favorites: {videoStatistics.statics.viewCount}</li>
								<li>Duration: {videoStatistics.statics.favoritesCount}</li>
								<li>Likes: {videoStatistics.statics.likeCount}</li>
								<li>Uploaded: `${videoStatistics.uploadedAt.substring(5,7)}/${videoStatistics.uploadedAt.substring(8,10)}/${videoStatistics.uploadedAt.substring(0,4)}`</li>
							</ul>

				<img alt="" href=`https://www.youtube.com/watch_popup?v=${${
					videoId[index].id.videoId` src={videoStatistics.snippet.thumbnails.url} height="75" />
						
						</li>
					))}
				</ul>
				
			</div >	

<a href=`https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`>{video.snippet.title}</a>

				{/* < div className="videosContainer" >
					{
						videoLink.data.items.map((video, index) => (
							< div key={index} >
								<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />
			</div >
	// 	))
	// }
	// 			</ div > * /}


// {/* </div> */ }



		{/* )
	} */}


	}

	export default VideoCards;