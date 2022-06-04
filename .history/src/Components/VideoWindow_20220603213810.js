import React, {useState, useEffect }from 'react'
import { useParams } from 'react-router-dom';
import LikesAddPlaylist from './LikesAddPlaylist';



function VideoWindow() {

export default function VideoWindow({ videos, }) {

	let arrayPlaylist = [];
    const [addVideo, setAddedVideo] = useState('')

	    // This useState takes care of likes count. It will increament by 1 if Likes/thumbUp is clicked,
    // and decreamentby 1 if dislike/thumbDown is clicked.
    const [likesDisLikeCount, setLikesDisLikeCount] = useState(0);

    // Increament likes count by 1
    const increment = () => {
        likesDisLikeCount === 0 ? setLikesDisLikeCount(likesDisLikeCount + 1) : setLikesDisLikeCount(likesDisLikeCount);
    }

    // icreament likes count by 1
    const decrement = () => {
        likesDisLikeCount === 1 ? setLikesDisLikeCount(likesDisLikeCount - 1) : setLikesDisLikeCount(likesDisLikeCount);
    }



    // This function will add a video url to the array
    let arrayPlaylistFunc = (id) => {
        arrayPlaylist.push(`https://www.youtube.com/watch_popup?v=${id}`)
        // console.log(arrayPlaylist)
    }


// console.log(useParams())

	//   console.log(videos[0])
	const { id } = useParams()

	let url = '';

	// console.log(videos[0])
	const { id } = useParams()

	const playedVideoInfo = videos.filter((video) => {
		if (video.id === id) {
			// console.log(video)
			getVideoObject(video)
		}
	})

	// If the user has not submitted a request for video, display a "Plese wait..." message.
	if (videos.length < 1) {
		return (
			<div className="myModal modal">
				<div className="modal-content">
					<h1>Please wait...</h1>
				</div>
			</div>
		)
	}

	else {

		url = `https://www.youtube.com/watch_popup?v=${id}`

		return (
			<div className="videoComments">
			<div>
			<iframe className='iframe-home iframe-player' title='video' src={url} frameBorder="0" allowFullScreen />
			</div>
			<LikesAddPlaylist // {/* Pass the arraylist function to capture all added videos */}
			arrayPlaylistFunc={arrayPlaylistFunc}
			increment={increment}
			decrement={decrement}
			likesDisLikeCount={likesDisLikeCount}
		/>
		</div>
	
	
		)
	}

}

}