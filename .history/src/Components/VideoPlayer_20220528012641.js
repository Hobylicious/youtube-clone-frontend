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
        searchedData(sea)
        setSearchedString('')
    }

    // Provide the searched string to the yotube API.
    // async function getSearchedData(searchedString) {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com',
            'X-RapidAPI-Key': '09791544c4msh44367899bb6a701p1c8e30jsn614d2345a728'
        }
    };

    

    useEffect(() => {
        searchedData()
    }, [])

    async function searchedData() {
        await fetch(`https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${searchedString}`, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    // console.log(result);

    if (videos.length < 0) {
        console.log('No results found')
    }
    else {
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
                    videos={videos} result={result}
                // videoId={videoId}
                // videoLink={videoLink}
                // videoStat={videoStat}
                />

                {/* Display video cards */}
                <VideoCards videos={videos} result={result}/>

                {/* <HomePage /> */}
            </div>

        </div>

    )
    }
    
}

export default VideoPlayer