import React from 'react';
import { Link } from 'react-router-dom';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	
	// This return all clickable thumbnails cards.
	else {


		console.log(videoLink.data.items[0])

		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (

					< div key={index} >

						<div className='card'>
							<img className='single-card' src={video.snippet.thumbnails.high.url} alt='images' width="150" height="100" onClick={() => {document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`}}/>
						</div>

						<div className='video-description'>
							<
								<ul className="meta">
									<li>By: <a href={item.author.ref}>{item.author.name}</a></li>
									<li>Views: {item.views}</li>
									<li>Duration: {item.duration}</li>
									<li>Uploaded: {item.uploadedAt}</li>
								</ul>
							</ul>
						</div>

						
					</div>
				))}

			</div>
		)
	}
}

export default VideoCards;


