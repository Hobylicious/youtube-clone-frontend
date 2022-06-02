import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCardsPlayer';
import VideoWindow from './VideoWindow';
import { home } from "react-icons/fc";
import HomePage from './HomePage';
import VideoCardsPlayer from './VideoCardsPlayer';
import './VideoPlayer.css'
import { useParams } from 'react-router-dom';



function VideoPlayer( { getIndex }) {

    const { id } = useParams()

    // This holds videos
    const [videos, setVideos] = useState([])
    
// This holds seggested videos
    const [suggestedVideos, setSuggestedVodeos] = useState([])

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('');

    // Declare a variable that will hold the video link and other information.
    // const [videos, setVideos] = useState([]);

    // Declare an object to hold data return from the second API call. Initialize it to an empty array.
    const [videoStat, setVideoStat] = useState([]);


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
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            setVideos(response.data.items)
            setSuggestedVodeos(response.data.refinements)
            // console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });
    }


    useEffect(() => {
        getSearchedId(id)
    }, [id])

        // Provide the searched string to the yotube API.
    async function getSearchedId(id) {

        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
            params: { q: id },
            headers: {
                'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            setVideos(response.data.items)
            setSuggestedVodeos(response.data.refinements)
            // console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <div className='video-player-body'>
            {/* Searched form */}
            <SearchForm
                searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <h1 onClick={
                () => getIndex(1)
            }>Click ME</h1>

            <div className='iframe-and-videoCards-container' >
                {/* Video window with suggested videos */}
                <VideoWindow
                    // videoId={videoId}
                    // videoLink={videoLink}
                    // videoStat={videoStat}
                    // result={result}
                    videos={videos}
                    suggestedVodeos={suggestedVideos}
                />

                {/* Display video cards */}
                <VideoCardsPlayer  videos={videos} suggestedVodeos={suggestedVideos} videoStat={videoStat} views={views} likes={likes} />

                {/* <HomePage /> */}
            </div>

        </div>

    )
}

export default VideoPlayer