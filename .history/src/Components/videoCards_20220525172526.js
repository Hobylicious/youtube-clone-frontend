import React from 'react'

export default function VideoCards({ videoLink }) {
	
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	else if(videoLink.length > 0)
	console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

//   return (
	  
// //     <div>
// // 		  {/* <img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' /> */}
// // 		  <img src="https://www.google.com/search?q=globe&sxsrf=ALiCzsZQ9xqhiy5-8CeIaKQUAJicnIg_tw:1653516746537&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjlvrry1fv3AhWJAp0JHbKcAx0Q_AUoAXoECAIQAw&biw=1920&bih=1096&dpr=1" alt='images' />
// //     </div>
//   )
}
