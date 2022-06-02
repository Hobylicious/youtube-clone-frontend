import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {
	return (
		// <div className='video-window'>
		// 	<ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k" />
		// </div>
		
		// <a href='https://www.youtube.com/watch?v=SQ94-kdF45k'>dfdfd</a>
		<div className='video-window'
			 style="width: 200px; height: 200px;">
				<embed src="https://www.youtube.com/embed/J---aiyznGQ?autohide=1&autoplay=1" wmode="transparent" type="video/mp4" width="100%" height="100%" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="Keyboard Cat">
			</div>	
</div>
		
	)
}
