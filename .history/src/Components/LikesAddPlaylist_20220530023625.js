import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";



function LikesAddPlaylist() {
	return (
		<div className='likes-add-playlist'>

			<div className='likes-container'>
				<p>Num</p>
				<p><BsHandThumbsUpFill className='likes-icon' />Likes</p>
			</div>

			<div className='dislikes-container'>
				<p>Num</p>
				<p><BsHandThumbsDownFill className='dislike-icon' />Dislikes</p>
			</div>

			<div className='add-to-playlist'>
				<BiAddToQueue className='add-to-playlist'/>
				Add to playlist
			</div>
		</div>
	)
}

export default LikesAddPlaylist

