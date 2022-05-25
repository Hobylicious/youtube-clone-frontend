import React from 'react'
import ReactPlayer from 'react-player'
ReactPlayer

export default function VideoCards({ videoLink }) {
	
	// console.log(videoLink)

	if (videoLink.length < 1) {
		const url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			<>
				<div>
					<ReactPlayer className='ytp-cued-thumbnail-overlay-image' url={url} />
				</div>
				<button className='ytp-menuitem-label' ><ImLoop /></button>
			</>
		)
		
	}
	// return (
	// 	videoLink.data.items.forEach(element => {
	// 		console.log(element)
	// 		// <img src={element.snippet.thumbnails.default.url} alt='images'/>
	// 	})


    //https://i.ytimg.com/vi_webp/wM7zqDG5Iws/maxresdefault.webp)
 // )
}
