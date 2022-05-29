import React from 'react';


// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videos }) => {

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
	if (videos.length < 0) {
		console.log("No result found")
	}


	// // This return all clickable thumbnails cards.
	// else {
	// 	return (
	// 		<div className="videosContainer">
	// 			{/* {videos.map((video, index) => ( */}

				< div className='single-card' key={0} >
					< div className='single-card' key={0} ></div>

						<img className='image' src={videos[0].author.thumbnails[1].url} height='60' alt='images' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videos[0].id}` }} />


						<div className="video-description">
							<p className='title' onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videos[0].id}}` }}>Title: {videos[0].title.charAt(0).toUpperCase()}{videos[0].title.substring(1).toLowerCase()}</p>
							<a className='channel-id' href={`https://www.youtube.com/channel/${videos[0].author.channelID}`}>Channel: {videos[0].author.name.toLowerCase().charAt(0).toUpperCase()}{videos[0].author.name.substring(1).toLowerCase()}</a>
							<p className='views'>Views: {viewsFunc(videos[0].author.views)}</p>
							<p className='date'>Posted: {videos[0].author.uploadedAt}</p>

						</div>
					</div>

	// 			{/* ))} */}

	// 		</div>
	// 	)
	// }
}

export default VideoCards;



