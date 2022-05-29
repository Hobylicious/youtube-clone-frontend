import React from 'react';
import { Link } from 'react-router-dom';



// This component receives two objects: videoId has thumbnails and and videoIds..., and videos has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videos, videoStat, likes, views }) => {

	// const[url, setUrl] = useState()

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
	
		{
			

			
			}
			< div className="modal" tabindex="-1" role="dialog" >
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Modal body text goes here.</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary">Save changes</button>
							<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div >
			
			</>

			
		
		
	}


	// This return all clickable thumbnails cards.
	else {
		return (videos && (
			<div className="cards">
				{videos.data.items.map((video, index) => (
					<Link className='link' to='/videoPlayer'>
						< div className='single-card' key={index} >

							<img className='image' src={video.snippet.thumbnails.high.url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />

							<div className="video-description">
								<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }}>Title: {video.snippet.title.charAt(0).toUpperCase()}{video.snippet.title.substring(1).toLowerCase()}</p>
								<a className='channel-id' href={`https://www.youtube.com/channel/${video.snippet.channelId}`} target='_blabk'>Channel: {video.snippet.channelTitle.toLowerCase().charAt(0).toUpperCase()}{video.snippet.channelTitle.substring(1).toLowerCase()}</a>
								<p className='views'>Views: {viewsFunc(views[index])}</p>
								<p className='views' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=T69CmY6Kc5g&list=${videoId[index].id.playlistId}` }}>Posted on: {video.snippet.publishedAt.substring(5, 7)}/{video.snippet.publishedAt.substring(8, 10)}/{video.snippet.publishedAt.substring(0, 4)}</p>

							</div>
						</div>
					</Link>
				))}

			</div>
		)

		)
	}
}


export default VideoCards;

