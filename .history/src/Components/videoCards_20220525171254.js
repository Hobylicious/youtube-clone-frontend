import React from 'react'
import ReactPlayer from 'react-player'



export default function VideoCards({ videoLink }) {

	// console.log(videoLink)

	// if (videoLink.length < 1) {
		const url = `https://www.youtube.com/watch?v=wM7zqDG5Iws`
		return (
			// <div className='video-window'
			// <div>
			<img src="https://www.google.com/aclk?sa=l&ai=DChcSEwjVl_nz1fv3AhWkIa0GHY_0CFAYABADGgJwdg&sig=AOD64_2ybr7y9o5ECNwqbjVYAaAn26b4Aw&adurl&ctype=5&ved=2ahUKEwiBieTz1fv3AhXDcs0KHa1NBmYQvhd6BAgBEGs" alt='name' />
				// {/* <ReactPlayer className='ytp-cued-thumbnail-overlay-image' url={url} /> */}
			// </div>
		)
	// }
	// return (
	// 	videoLink.data.items.forEach(element => {
	// 		console.log(element)
	// 		// <img src={element.snippet.thumbnails.default.url} alt='images'/>
	// 	})


	//https://i.ytimg.com/vi_webp/wM7zqDG5Iws/maxresdefault.webp)
	// )
}
