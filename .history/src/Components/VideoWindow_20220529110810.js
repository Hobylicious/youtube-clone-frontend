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

<

			// <Modal show={true}>

			// 	< div class="modal" tabindex="-1" role="dialog" >
			// 		<div class="modal-dialog" role="document">
			// 			<div className="modal-content">
			// 				<div class="modal-header">
			// 					<h5 class="modal-title">Modal title</h5>
			// 					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
			// 						<span aria-hidden="true">&times;</span>
			// 					</button>
			// 				</div>
			// 				<div class="modal-body">
			// 					<p>Modal body text goes here.</p>
			// 				</div>
			// 				<div class="modal-footer">
			// 					<button type="button" class="btn btn-primary">Save changes</button>
			// 					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div >
				
			// </Modal>
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
