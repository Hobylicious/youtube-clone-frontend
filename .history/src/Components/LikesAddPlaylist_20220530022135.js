import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";


function LikesAddPlaylist() {
  return (
    <div className='likes-add-playlist'>
		  <p><BsHandThumbsUpFill />Likes</p>
		  <p><BsHandThumbsUpFill />Dislikes</p>
    </div>
  )
}

export default LikesAddPlaylist

