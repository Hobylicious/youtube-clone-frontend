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

	if (!videoObject.author.name) {
		console.log('Please wait')
	}

	else {

	}

	return ( &&
		
	)
}

export default LikesAddPlaylist

