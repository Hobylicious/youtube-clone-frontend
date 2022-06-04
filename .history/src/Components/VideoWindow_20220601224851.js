import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LikesAddPlaylist from './LikesAddPlaylist';


function VideoWindow({ videos, playingVideoInfo }) {

	// To capture the information of each video playing video, "videos" will be filtered 
	// to return the video that includes the id is equal to the played video's id.
	const [playing, setPlayingVideo] = useState(null);
	// console.log(useParams())

	 console.log(playingVideoInfo)
	const { id } = useParams()

	const playedVideoInfo = videos.filter(video => {
		if (video.id === id) {
			return video
		}
	})

		playingVideoInfo.push(...playedVideoInfo)
	


	let url = '';

	// If the user has not submitted a request for video, display a "Plese wait..." message.
	if (videos.length < 1) {
		url = `https://www.youtube.com/watch_popup?v=PkXxm2tCtgs`
		return (
			<div id="myModal" class="modal">
				<div className="modal-content">
					<h1>Please wait...</h1>
				</div>
			</div>
		)
	}

	else {

		url = `https://www.youtube.com/watch_popup?v=${id}`

		return (
			<iframe className='iframe-home iframe-player' title='video' src={url} frameBorder="0" allowFullScreen />
		)
	}
}

export default VideoWindow


