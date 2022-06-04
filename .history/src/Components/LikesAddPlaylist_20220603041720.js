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


	return (videoObject.type === 'video' &&
		<div className='like-dislike-playlist-container'>
			<div className='title-date-channel-container'>
				<p className='playing-video-title'>{videoObject.title.charAt(0).toUpperCase()}{videoObject.title.substring(1).toLowerCase()}</p>
				<p className='playing-video-uploadedAt'>{videoObject.uploadedAt}</p>
				<div className='avatar-channelName'>
					<img className="playing-video-avatar" src={videoObject.author.avatars[0].url} alt='authorAvatar' />
					<p className='playing-video-channel'>{videoObject.author.name.charAt(0).toUpperCase()}{videoObject.author.name.substring(1).toLowerCase()}</p>
				</div>
			</div>

			<div className='icons-container'>
				
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

