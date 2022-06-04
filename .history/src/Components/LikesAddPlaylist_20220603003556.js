import React, { useEffect } from 'react'
import { BiAddToQueue } from "react-icons/bi";
import { FcDislike, FcLike, } from "react-icons/fc";
import { MdOutlineAddComment } from "react-icons/md";
import { ImEye } from "react-icons/im";
import { Link, useParams } from 'react-router-dom';
import Comments from './Comments';



function LikesAddPlaylist({ arrayPlaylistFunc, increment, decrement, likesDisLikeCount, playingVideoInfo, videoObject, viewsFunc }) {

	let { name } = useParams()
	// console.log(playingVideoInfo)
	// getVideoObject(playingVideoInfo)

	// const x = getVideoObject(545)
	// console.log(x)

	let { id } = useParams();


	// useEffect(() => {
	// 	if (id) {
	// 		arrayPlaylistFunc(id)
	// 	}
	// }, [id])

	return (videoObject &&
		<div className='like-dislike-playlist-container'>

			<div className='title-date-channel'>
				<p className='playing-video-title'>{videoObject.title}</p>
				<p className='playing-video-uploaded-date'>{videoObject.uploadedAt}</p>
				<p className='playing-video-cha'>{videoObject.uploadedAt}</p>
				{/* <img  src={videoObject.author.avatars[0].url} alt='' /> */}
			</div>

			<div className='views-container'>
				<p>{viewsFunc(videoObject.views)}</p>
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

			{/* <Link to={`/comments`}> */}
				{/* <div className='comments'>
					<MdOutlineAddComment className='comments-icon' display={'none'} onClick={() => arrayPlaylistFunc(id)
					} />
					Comments
				</div> */}
			{/* </Link> */}
			{/* <Comments /> */}
		</div>
	)
}

export default LikesAddPlaylist

