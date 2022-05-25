import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`
	console.log(url)
	return (


		<div className='video-window'>

			<SearchForm
				searchedString={searchedString}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
			/>

			<ReactPlayer url={url} />
		</div>


	)
}
