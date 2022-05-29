import React from 'react'
// import ReactPlayer from 'react-player'
// import { ImLoop } from "react-icons/im";


export default function VideoWindow({ video }) {

	//  console.log(videoId)

	let url = '';

	// Put a video video holder if the user has not submitted a request for video.
	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`
		return (
			<div className='iframe-home iframe-player'>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
			</div>
		)
	}

	else {

		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`

		return (
				<div className='iframe-home iframe-player'>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
				</div>
		)
	}


}
