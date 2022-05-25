import React from 'react'

export default function VideoCards({ videoLink }) {
	
	if(videoLink.length > 0) {
		videoLink.map((video) => (
			<div>
				<img src={videoLink.data.items[0].snippet.thumbnails.default.url} alt='images' />
			</div>
		)) 

		else {

		}
		
	
	//console.log(videoLink.data.items[0].snippet.thumbnails.default.url)

		return( 
		<img src= 'https://i.ytimg.com/vi/noHz5ARqNWg/default.jpg' alt='images'/>
    </div>
  </>
    
  )
}
