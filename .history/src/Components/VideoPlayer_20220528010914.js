import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCards';
import VideoWindow from './VideoWindow';
import HomePage from './HomePage';


function VideoPlayer() {

    // Declare an object to hold data return from the second API call. Initialize it to an empty array.
    const [result, setResult] = useState([]);

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('Harmonize');
    // Declare a variable that will hold the video link and other information.
    const [videos, setVideos] = useState([]);
    // const search = (e) => {
    //     e.preventDefault();
    //     getSearchedData(searchedString).then(setVideos);
    // };


    // // HandleChange on each keypress
    const handleChange = (event) => {
        setSearchedString(event.target.value);
    }

    // // HandleSubmit submits the searchedString to the getSearchedData function when "the search icon is clicked"
    const handleSubmit = (event) => {
        event.preventDefault();
    options.params.q = searchedString
        setSearchedString('')
    }

    // Provide the searched string to the yotube API.
    // async function getSearchedData(searchedString) {

    const options = {
        method: 'GET',
        url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
        params: { q: 'Harmonize' },
        headers: {
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
            'X-RapidAPI-Key': '09791544c4msh44367899bb6a701p1c8e30jsn614d2345a728'
        }
    };

    useEffect(() => {
        axios.request(options).then(function (response) {
            setVideos(response.data.items)
            setResult(response.data.refinements)
        
    }).catch(function (error) {
        console.error(error);
    });
    }, [])

    console.log(setSuggestedVideos);
    //     });

    //     // console.log(response)

    //     setVideos(response.items)
    //     setSuggestedVideos(response.refinements)

    //     const body = await response.json();
    //     setVideos(body.items);
    //     console.log(videos)
    //     return body.items.filter(item => item.type === 'video');

        // // This API is responsible for getting the video's id that we will use in the second API statstical information about the video.
        // let urlVideoId = `${apiVideoId.api}${searchedString}&key=${apiVideoId.key}`;

        // await axios.get(urlVideoId)
        //     .then((data) => {
        //         // console.log(data);
        //         setVideoLink(data)
        //         // console.log(data.data.items[0].id.videoId.length);
        //         // setSearchedObject(data)

        //         // Check if the result fron the first API is not empty.
        //         if (data) {
        //             setVideoId(data.data.items)
        //             // The API below gets us statistical information.
        //             let urlVideoStat = `${apiVideoStat.api}${data.data.items[9].id.videoId}&key=${apiVideoId.key}&part=snippet,statistics&fields=items(id,snippet,statistics)`

        //             axios.get(urlVideoStat)
        //                 .then((result) => {
        //                     console.log(result)
        //                     setVideoStat(result)
        //                     setViews(result.data.items[0].statistics.viewCount);
        //                     setLikes(result.data.items[0].statistics.likeCount)
        //                 })
        //         }

        //         else {
        //             console.log('No reesult')
        //         }

        //     });
//    }

    // console.log(videoLink)




    // return (

    //     <div className='video-player-body'>
    //         {/* Searched form */}
    //         <SearchForm
    //             searchedString={searchedString}
    //             handleChange={handleChange}
    //             handleSubmit={handleSubmit}
    //         />

    //         <div className='iframe-and-videoCards-container' >
    //             {/* Video window with suggested videos */}
    //             <VideoWindow
    //                 videos={videos} setSuggestedVideos={suggestedVideos}
    //             // videoId={videoId}
    //             // videoLink={videoLink}
    //             // videoStat={videoStat}
    //             />

    //             {/* Display video cards */}
    //             <VideoCards videos={videos} />

    //             {/* <HomePage /> */}
    //         </div>

    //     </div>

    // )
}

export default VideoPlayer