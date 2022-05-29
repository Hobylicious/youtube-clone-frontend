import React from 'react';
import { Link } from 'react-router-dom';



// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCardsHome = ({ videos, suggestedVodeos }) => {

	// const[url, setUrl] = useState()

 console.log(videos[0])
	// { videoId, videos, videoStat, likes, views}

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
			<div className="cards car" >
				{videos.map((video, index) => (
					<Link className='link' to='/videoPlayer'>
						< div className='single-card' key={index} >

							{/* <img className='image' src={video.author.thumbnails[0].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.author.id}` }} /> */}

							<div className="video-description">
								<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${video.id}` }}>Title: {video.thumbnails.title.charAt(0).toUpperCase()}{video.thumbnails.title.substring(1).toLowerCase()}</p>
								<a className='channel-id' href={`https://www.youtube.com/channel/${video.author.channelID}`} target='_blabk'>Channel: {video.author.name.toLowerCase().charAt(0).toUpperCase()}{video.video.author.name.substring(1).toLowerCase()}</a>
								<p className='views'>Views: {viewsFunc(video.author.thumbnails.views)}</p>
								<p className='views'>Posted: {video.author.thumbnails.uploadedAt}</p>

							</div>
						</div>
					</Link>
				))}

			</div>
		)

		)
	}
}


export default VideoCardsHome;

