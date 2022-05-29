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

				<ul className="items">
					{videoLink.data.items.map((video, index) => (

						<div>
							<li className="item" key={index}>

								<div>
									{/* <a>{video.snippet.title}</a> */}

									<p>{video.snippet.title}</p>
								</div>

								<ul className="meta">
									{/* <li>By: <a>{video.snippet.channelTitle}</a></li> */}
									<li>Views: {videoStatistics.statics.viewCount}</li>
									<li>Favorites: {videoStatistics.statics.viewCount}</li>
									<li>Duration: {videoStatistics.statics.favoritesCount}</li>
									<li>Likes: {videoStatistics.statics.likeCount}</li>
									<li>Uploaded: `${videoStatistics.uploadedAt.substring(5, 7)}/${videoStatistics.uploadedAt.substring(8, 10)}/${videoStatistics.uploadedAt.substring(0, 4)}`</li>
								</ul>

								
							</li>
						</div>
					))}
				</ul>
				
				
			
		)
	}
}

export default VideoCards;