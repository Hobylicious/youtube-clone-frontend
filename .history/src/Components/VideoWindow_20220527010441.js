import React from 'react'
// import ReactPlayer from 'react-player'
// import { ImLoop } from "react-icons/im";


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	// console.log(videoLink)

	let url = '';

	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			<>
				{/* <embed src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1&autoplay=10" wmode="transparent" type="video/mp4" width="100%" height="100%" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Keyboard Cat" /> */}

				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
				{/* <button className='ytp-menuitem-label' ><ImLoop /></button> */}
			</>
		)
	}

	else {
		url = `https://www.youtube.com/watch_popup?v=${videoId}`
		return (
			// <div className='video-window'
				<div>
					<iframe title='video' src={url} frameBorder="0" allowFullScreen></iframe>
					<div className="videosContainer">
						{videoLink.data.items.map((video, index) => (
							< div key={index} >
								<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => { document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}` }} />
							</div>
						))}

					</div>
				</div>
		
		)
	}


}
