import React, { useEffect } from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { BiAddToQueue } from "react-icons/bi";
import { useParams } from 'react-router-dom';



function LikesAddPlaylist({ arrayPlaylistFunc, increment, decrement, likesDislikesCount } ) {

	let { id } = useParams();


	useEffect(() => {
		if (id) {
			arrayPlaylistFunc(id)
		}
	}, [id])


	return (
		<div className='like-dislike-playlist-container'>

			<div className='likes-container'>
				<p>{likesDislikesCount}</p>
				<div className='like-icon'>
					<BsHandThumbsUpFill onClick={ () => {}} />
					Like
				</div>
				{/* <p>Num</p>
				<p><BsHandThumbsUpFill className='likes-icon' />Like</p> */}
			</div>

			<div className='dislikes-container'>
				<p>{likesDislikesCount}</p>
				<div className='dislike-icon'>
					<BsHandThumbsDownFill />
					Dislike
				</div>
			</div>

			<div className='add-to-playlist'>
				<BiAddToQueue className='add-to-playlist' onClick={() => arrayPlaylistFunc(id)
				} />
				Add to playlist
			</div>

			

		</div>
	)
}

export default LikesAddPlaylist

