import React from 'react'
import { useParams } from 'react-router-dom';



export default function VideoWindow({ videos }) {

console.log(useParams())

	//   console.log(videos[0])
	const { id } = useParams()

	let url = '';

	// If the user has not submitted a request for video, display a "Plese wait..." message.
	if (videos.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`
		return (
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
			<
				<iframe className='iframe-home iframe-player' title='video' width="629.29" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
			</div>
		)
	}


}
