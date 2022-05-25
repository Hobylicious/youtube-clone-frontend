import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {

	const url = `https://www.youtube.com/watch_popup?v=${videoId}`
	console.log(url)
	return (
		<div></div>
		<SearchForm
                searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
		// <div className='video-window'>
			<ReactPlayer url={url} />
		// 	
		}
		
	)
}
