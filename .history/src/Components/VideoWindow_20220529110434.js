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
			<Modal
			
< div className = "modal" tabindex = "-1" role = "dialog" >
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
