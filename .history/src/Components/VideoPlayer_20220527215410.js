import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCards';
import VideoWindow from './VideoWindow';
import HomePage from './HomePage';


function VideoPlayer() {

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('Harmonize');

    // Declare a variable that will hold the video link and other information.
    const [videoLink, setVideoLink] = useState([]);

    // Declare an object to hold data return from the second API call. Initialize it to an empty array.
    const [videoStat, setVideoStat] = useState([]);

    const [videoId, setVideoId] = useState('');

    // view count
    const [views, setViews] = useState(0);

    // Likes
    const [likes, setLikes] = useState(0);

    



    // HandleChange on each keypress
    const handleChange = (event) => {
        setSearchedString(event.target.value);
    }

    // HandleSubmit submits the searchedString to the getSearchedData function when "the search icon is clicked"
    const handleSubmit = (event) => {
        event.preventDefault();
        getSearchedData(searchedString)
        setSearchedString('')
    }

    // The API for videoId
    // This API key object holds the API key.
    let apiVideoId = {
        key: process.env.REACT_APP_API_KEY,
        api: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`
    };

    // The API for video's statistics data.
    // This API key object holds the API key.
    let apiVideoStat = {
        api: `https://www.googleapis.com/youtube/v3/videos?id=`
    };

    // Let's use useEffect allow the API call once per call.
    useEffect(() => {
        getSearchedData()
        // setSearchedString(searchedString)
    }, []);

    // Provide the searched string to the yotube API.
    async function getSearchedData(searchedString) {

        searchedString = encodeURIComponent(searchedString);
        const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + 'Harmonize', {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
                "x-rapidapi-key": '9877f2eb6bmshad910d1fedcdf8ep13db1ejsn07b69fdb0f8c'
            }
        });

        console.log(response)

        const body = await response.json();
        console.log(body);
        return body.items.filter(item => item.type === 'video');

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
    }

    // console.log(videoLink)

    if (videoId.length < 0) {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={loading} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }

    return (
        <div className='video-player-body'>
            {/* Searched form */}
            <SearchForm
                searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <div className='iframe-and-videoCards-container' >
                {/* Video window with suggested videos */}
                <VideoWindow
                    videoId={videoId}
                    videoLink={videoLink}
                    videoStat={videoStat}
                />

                {/* Display video cards */}
                <VideoCards videoId={videoId} videoLink={videoLink} videoStat={videoStat} likes={likes} views={views} />

                {/* <HomePage /> */}
            </div>

        </div>

    )
}

export default VideoPlayer