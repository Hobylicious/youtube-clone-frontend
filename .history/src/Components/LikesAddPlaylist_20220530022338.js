import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";


function LikesAddPlaylist() {
	return (
		<div className='likes-add-playlist'>
			
			<div className='likes-container'>
				<p>Num</p>
				<p><BsHandThumbsUpFill />Like</p>
			</div>
			
			<div className='likes-container'>
				<p>Num</p>
				<p><BsHandThumbsDownFill />Dislike</p>
			</div>

			<p><BsHandThumbsUpFill /></p>
		</div>
	)
}

export default LikesAddPlaylist

