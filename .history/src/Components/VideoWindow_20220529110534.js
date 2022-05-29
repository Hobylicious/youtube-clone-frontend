import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";


export default function VideoWindow({ videoId, videoStat }) {

	//  console.log(videoId)

	let url = '';

	// Put a video video holder if the user has not submitted a request for video.
	if (videoId.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`
		return (
			<Modal show={true}>


				
			</Modal>
			




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
