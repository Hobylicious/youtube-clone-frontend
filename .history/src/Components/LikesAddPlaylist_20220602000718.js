import React, { useEffect } from 'react'
import { BiAddToQueue } from "react-icons/bi";
import { FcDislike, FcLike, } from "react-icons/fc";
import { MdOutlineAddComment } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { Link, useParams } from 'react-router-dom';



function LikesAddPlaylist({ arrayPlaylistFunc, increment, decrement, likesDisLikeCount, views, playingVideoInfo }) {

	let { name } = useParams()
	 console.log(playingVideoInfo)

	let { id } = useParams();


	// useEffect(() => {
	// 	if (id) {
	// 		arrayPlaylistFunc(id)
	// 	}
	// }, [id])

	return (
		<div className='like-dislike-playlist-container'>

			<div className='views-container'>
				<p>{}</p>
				<div className='views-icon' >
					<ImEye className='eye' />
					Views
				</div>
			</div>

			<div className='likes-container'>
				<div className='like-icon'>
					<FcLike onClick={() => { increment() }} />
					Like
				</div>
			</div>

			<div className='dislikes-container'>
				<p>{likesDisLikeCount}</p>
				<div className='dislike-icon'>
					<FcDislike onClick={() => { decrement() }} />
					Dislike
				</div>
			</div>

			<div className='add-to-playlist'>
				<BiAddToQueue className='add-to-playlist-icon' onClick={() => arrayPlaylistFunc(id)
				} />
				Add to playlist
			</div>

			Li
			<div className='comments'>
				<MdOutlineAddComment className='comments-icon' onClick={() => arrayPlaylistFunc(id)
				} />
				Comments
			</div>


		</div>
	)
}

export default LikesAddPlaylist

