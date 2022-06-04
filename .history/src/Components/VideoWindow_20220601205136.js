import React from 'react'
import { useState, useParams } from 'react-router-dom';
import LikesAddPlaylist from './LikesAddPlaylist';


function VideoWindow({ videos }) {
	
	// To capture the information of each video playing video, "videos" will be filtered 
	// to return the video that includes the id is equal to the played video's id.
	const [playingVideoInfo, setPlayingVideoInfo] = useState([])

	// console.log(useParams())

	console.log(videos[0])
	const { id } = useParams()

	const playedVideoInfo = videos.filter(video => {
		if (video.id === id) {
			setPlayingVideoInfo(...)
		}
	})

	console.log(playedVideoInfo)

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


  return (
	  <LikesAddPlaylist playingVideoInfo={playedVideoInfo} />
  )
}

export default VideoWindow


