import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";


function LikesAddPlaylist() {
	return (
		<div className='likes-add-playlist'>

			<div className='likes-container'>
				<p>Num</p>
				<p><BsHandThumbsUpFill />Like</p>
			</div>

			<div className='dislikes-container'>
				<p>Num</p>
				<p><BsHandThumbsDownFill className='dislike-icon' />Dislike</p>
			</div>

			<div className='add-to-playlist'>
				Add to playlist
			</div>
		</div>
	)
}

export default LikesAddPlaylist

