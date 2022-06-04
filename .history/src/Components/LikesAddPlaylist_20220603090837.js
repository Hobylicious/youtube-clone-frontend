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
				<div className='viewsNumber-viewsIcon-viewText' >
					<p className='playing-video-uploadedAt'>{viewsFunc(videoObject.views)}</p>
					<div className='views-container'>
						<ImEye className='eye ' />
						<p className='playing-video-uploadedAt' >Views</p>
					</div>
				</div>

				<div className='likes-dislikes-container'>
					<div className='likes-container'>
						<FcLike className='heart' onClick={() => { increment() }} />
						<p className='playing-video-uploadedAt'>Like</p>
					</div>

					<div className='dislikes-container'>
						<p className='playing-video-uploadedAt'>{likesDisLikeCount}</p>
						<div className='dislike'>
							<FcDislike className='brokenHeart' onClick={() => { decrement() }} />
							<p className='playing-video-uploadedAt' >Dislike</p>
						</div>
					</div>
				</div>


				<div className='add-to-playlist'>
					<BiAddToQueue className='add-to-playlist-icon' onClick={() => arrayPlaylistFunc(id)
					} />
					<p className='playing-video-uploadedAt'>Add to playlist</p>
				</div>
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

