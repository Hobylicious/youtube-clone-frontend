import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm';
import VideoCards from '../VideoPlayer/VideoCardsPlayer';
import VideoWindow from '../VideoWindow';
import VideoPlayer from '../VideoPlayer';
import VideoCardsHome from './VideoCardsHome';
import './HomePage.css';
import { useParams } from 'react-router-dom';




function HomePage({ getIndex }) {

    const { id } = useParams()

    // This holds videos
    const [videos, setVideos] = useState([])

    // This holds seggested videos
    const [suggestedVideos, setSuggestedVodeos] = useState([])

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('Harmonize');

    // Declare a variable that will hold the video link and other information.
    // const [videos, setVideos] = useState([]);

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

    // Let's use useEffect allow the API call once per call.
    useEffect(() => {
        getSearchedData(searchedString)
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


    return (
        <div className='video-player-body'>

            {/* Searched form */}
            <SearchForm
                searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <div className='iframe-and-videoCards-container' >
                {/* Display video cards */}
                <VideoCardsHome videoId={videoId} videos={videos} suggestedVideos={suggestedVideos} videoStat={videoStat} views={views} likes={likes} />
            </div>

        </div>

    )

}

export default HomePage







