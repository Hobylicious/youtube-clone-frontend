import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";



function LikesAddPlaylist() {
	return (
		<div className='likes-add-playlist'>

			<div className='likes-container'>
				<p>Num</p>
				<div className='dislikes-icon'>
					<BsHandThumbsUpFill />
					Like
				</div>
				{/* <p>Num</p>
				<p><BsHandThumbsUpFill className='likes-icon' />Like</p> */}
			</div>

			<div className='dislikes-container'>
				<p>Num</p>
				<div className='dislikes-icon'>
					<BsHandThumbsDownFill />
					Dislike
				</div>
			</div>

			<div className='add-to-playlist'>
				<BiAddToQueue className='add-to-playlist' />
				Add to playlist
			</div>
		</div>
	)
}

export default LikesAddPlaylist

