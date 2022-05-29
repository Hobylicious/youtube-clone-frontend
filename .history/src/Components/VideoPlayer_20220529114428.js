import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCards';
import VideoWindow from './VideoWindow';
import { home } from "react-icons/fc";
import HomePage from './HomePage';

import './VideoPlayer.css'

function VideoPlayer() {

    // This holds videos
    const [result, setResult] = ([])
    
// This holds seggested videos
    const [suggestedVideos, setSuggestedVodeos] = 

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('');

    // Declare a variable that will hold the video link and other information.
    const [videos, setVideos] = useState([]);

    // Declare an object to hold data return from the second API call. Initialize it to an empty array.
    const [videoStat, setVideoStat] = useState([]);

    const [videoId, setVideoId] = useState('');

    // Hold all views in an array
    let views = []

    // Hold all likes in an array
    let likes = []




    // HandleChange on each keypress
    const handleChange = (event) => {
        event.preventDefault();
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
    // let apiVideoId = {
    //     key: process.env.REACT_APP_API_KEY,
    //     api: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`
    // };

    // // The API for video's statistics data.
    // // This API key object holds the API key.
    // let apiVideoStat = {
    //     api: `https://www.googleapis.com/youtube/v3/videos?id=`
    // };

    // Let's use useEffect allow the API call once per call.
    useEffect(() => {
        getSearchedData()
        // setSearchedString(searchedString)
    }, []);

    // Provide the searched string to the yotube API.
    async function getSearchedData(searchedString) {

        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
            params: { q: searchedString },
            headers: {
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
                'X-RapidAPI-Key': '09791544c4msh44367899bb6a701p1c8e30jsn614d2345a728'
            }
        };

        axios.request(options).then(function (response) {
            setResult(response.data)
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });

        //         // This API is responsible for getting the video's id that we will use in the second API statstical information about the video.
        // let urlVideoId = `${apiVideoId.api}${searchedString}&key=${apiVideoId.key}`;

        // await axios.get(urlVideoId)
        //     .then((data) => {

        //         setVideos(data)

        //         // Check if the result fron the first API is not empty.
        //         if (data.data) {
        //             setVideoId(data.data.items)

        //                 // The API below gets us statistical information.
        //             let urlVideoStat = `${apiVideoStat.api}${data.data.items[0].id.videoId}&key=${apiVideoId.key}&part=snippet,statistics&fields=items(id,snippet,statistics)`

        //                 axios.get(urlVideoStat)
                            
        //                     .then((result) => {
                                
        //                         setVideoStat(result.data)
        //                         // Put N/A if there is no data (Likes or Views) 
        //                         if ((result.length < 0) || (result.data.items[0] === undefined)) {
        //                             views.push('N/A');
        //                             likes.push('N/A');
        //                         }

        //                         //If views and likes exist, push all them to their respective arrays.
        //                         else {
        //                             views.push(result.data.items[0].statistics.viewCount)
        //                             likes.push(result.data.items[0].statistics.likeCount)
        //                         }
        //                     })
            
        //         }

        //     }
        // );
        

    
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
                    // videoLink={videoLink}
                    videoStat={videoStat}
                    result={result}
                />

                {/* Display video cards */}
                <VideoCards videoId={videoId} videos={videos} videoStat={videoStat} views={views} likes={likes} result={result}/>

                {/* <HomePage /> */}
            </div>

        </div>

    )
}

export default VideoPlayer