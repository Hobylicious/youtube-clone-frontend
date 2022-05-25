import React from 'react'
import ReactPlayer from 'react-player'


export default function VideoWindow({ videoId, videoLink, videoStat }) {
	console.log(videoLink)
	return (
		// <div className='video-window'>
		// 	<ReactPlayer url="https://www.youtube.com/watch?v=SQ94-kdF45k" />
		// </div>

		// <a href='https://www.youtube.com/watch?v=SQ94-kdF45k'>dfdfd</a>
		<div className='video-window'>
			<iframe
				src="https://www.youtube.com/embed/SQ94-kdF45k"
				frameborder="0"
				allow="autoplay; encrypted-media"
				height="300"
				width="643.1"
				title="video"
			/>{" "}

			
			<section className="container">
          {
            birds.map((bird, key) =>
            (
              
              <Link to={`/details/${bird.id}`} key={bird.id}>
                <div className="card" >
                  <div className="card-image">
                    <img
                      src={bird.image}
                      alt={bird.name}
                    />
                  </div>
                  <div className="card-title">
                    <h3>{bird.name}</h3>
                  </div>
                </div>
             </Link>
            )
            )
        }
      </section>
		</div>

	)
}
