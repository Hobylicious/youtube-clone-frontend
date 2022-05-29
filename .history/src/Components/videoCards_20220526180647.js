import React from 'react';

// This component receives two objects: videoId has thumbnails and and videoIds..., and videoLink has statics information like views count, likes, dislikes...
const VideoCards = ({ videoId, videoLink }) => {

	// This is for safety; if there is no result, just consolelog.
	if (videoLink.length < 1) {
		console.log("No result found")
	}

	// This return all clickable thumbnails cards.
	else {
			return (


				<div>
					{
						list && (list.length === 0)
							? <p>No results</p> :
							(
								<ul className="items">
									{list.map(item => (
										<li className="item" key={item.id}>
											<div>
												<b><a href={item.url}>{item.title}</a></b>
												<p>{item.description}</p>
											</div>
											<ul className="meta">
												<li>By: <a href={item.author.ref}>{item.author.name}</a></li>
												<li>Views: {item.views}</li>
												<li>Duration: {item.duration}</li>
												<li>Uploaded: {item.uploadedAt}</li>
											</ul>
											<img alt="" src={item.bestThumbnail.url} height="75" />
										</li>
									))}
								</ul>
					}		)
				</div>


				//                 {list &&
				//                     (list.length === 0
				//                         ? <p>No results</p>
				//                         : (
				//                             <ul className="items">
				//                                 {list.map(item => (
				//                                     <li className="item" key={item.id}>
				//                                         <div>
				//                                             <b><a href={item.url}>{item.title}</a></b>
				//                                             <p>{item.description}</p>
				//                                         </div>
				//                                         <ul className="meta">
				//                                             <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
				//                                             <li>Views: {item.views}</li>
				//                                             <li>Duration: {item.duration}</li>
				//                                             <li>Uploaded: {item.uploadedAt}</li>
				//                                         </ul>
				//                                         <img alt="" src={item.bestThumbnail.url} height="75" />
				//                                     </li>
				//                                 ))}
				//                             </ul>
				//                         )
				//                     )
				//                 }


				// <div className="videosContainer">
				// 	{videoLink.data.items.map((video, index) => (
				// 		< div key={index} >
				// 			<img className='single-card' src={video.snippet.thumbnails.default.url} alt='images' width="120" height="90" onClick={() => {document.getElementsByTagName('iframe')[0].src = `https://www.youtube.com/watch_popup?v=${videoId[index].id.videoId}`}}/>
				// 		</div>
				// 	))}

				// </div>
			)
		}

	}
}

export default VideoCards;