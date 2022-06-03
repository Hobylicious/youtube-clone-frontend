import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LikesAddPlaylist from './LikesAddPlaylist';


function VideoWindow({ videos, getPlayedVideoInfo }) {

	// To capture the information of each video playing video, "videos" will be filtered 
	// to return the video that includes the id is equal to the played video's id.
	const [playingVideoInfo, setPlayingVideoInfo] = useState(null);
	// console.log(useParams())

	let url = '';

	// console.log(videos[0])
	const { id } = useParams()

	const playedVideoInfo = videos.filter((video) => {
		if (video.id === id) {
			return video
		}
	})

// This useEffect 
	useEffect(() => {
		getPlayedVideoInfo(playingVideoInfo)
	},[id])

	useEffect(() => {
		getPlayedVideoInfo(playedVideoInfo)
	}, [id]);


	// If the user has not submitted a request for video, display a "Plese wait..." message.
	if (videos.length < 1) {
		return (
			<div className="myModal modal">
				<div className="modal-content">
					<h1>Please wait...</h1>
				</div>
			</div>
		)
	}

	else {

		url = `https://www.youtube.com/watch_popup?v=${id}`

		return (
			<iframe className='iframe-home iframe-player' title='video' src={url} frameBorder="0" allowFullScreen
				getPlayedVideoInfo={getPlayedVideoInfo} />
		)
	}
}

export default VideoWindow


