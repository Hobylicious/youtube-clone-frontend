import React from 'react'
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";


function LikesAddPlaylist() {
  return (
	  <div className='likes-add-playlist'>
		  
		  <p>Num</p>
		  <p><BsHandThumbsUpFill />Like</p>
		  <p><BsHandThumbsUpFill />Dislike</p>
    </div>
  )
}

export default LikesAddPlaylist

