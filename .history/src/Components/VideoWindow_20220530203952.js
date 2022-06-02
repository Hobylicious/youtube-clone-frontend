import React from 'react'
import { useParams } from 'react-router-dom';
import Image from



export default function VideoWindow({ videos }) {

	//   console.log(videos[0])
	const { id } = useParams()

	let url = '';

	// Put a video video holder if the user has not submitted a request for video.
	if (videos.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`
		return (
			// <div className='iframe-home iframe-player'>
			// 	<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
			// </div>
			<>
				<div id="myModal" class="modal">
					<div class="modal-content">
						<h1>Please wait...</h1>
					</div>
				</div>
			</>
		)
	}

	else {

		url = `https://www.youtube.com/watch_popup?v=${id}`

		return (
			<div className='iframe-home iframe-player'>
				<iframe title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
			</div>
		)
	}


}
