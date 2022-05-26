import React from 'react';

const VideoCards = ({ videoLink }) => {

	console.log(videoLink)

	if (videoLink.length < 1) {
		console.log("No result found")
	}

	else {

		const iframe = document.getElementsByTagName('iframe')
		console.log(iframe.src)

		return (
			<div className="videosContainer">
				{videoLink.data.items.map((video, index) => (

					<div key={index}>
						<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => {iframe.src = 'https://www.youtube.com/channel/UCcabW7890RKJzL968QWEykA'}} />
					</div>

				))}

			</div>
		)

	}

	// return (
	// 	<div>
	// 		<img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
	// 	</div>
	// );


}

export default VideoCards;





// import React from 'react'

// export default function VideoCards({ videoLink }) {



// 	if (videoLink.length < 1) {
// 		console.log("No result found")
// 	}

// 	else if (videoLink.length > 0) {

// 		console.log(videoLink.data.items)
// 		// console.log(videoLink.data)
// 		// let url = `${videoLink.data.items[0].snippet.thumbnails.default.url}`;
// 		return (
// 			// <img src={url} alt='images' />
// 			// <div>
// 			// 	<img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
// 			// </div>
// 			// <div>
// 			// 	<img src="https://www.etsy.com/listing/764343506/earth-svg-planet-earth-png-world-dxf?gpla=1&gao=1&" alt="xyz" />
// 			// </div>
// 			<h1>Hello</h1>



// 		)
// 	}

// }
