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
import LikesAddPlaylist from './LikesAddPlaylist';
import LikeDislike from './LikeDislike';




function VideoPlayer({ getIndex }) {

    const { id } = useParams()

    // This holds videos
    const [videos, setVideos] = useState([])

    // This holds seggested videos
    const [suggestedVideos, setSuggestedVodeos] = useState([])

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('');
    
    // This array will hold added videos as playlist.
    let arrayPlaylist = [];
    const [addVideo, setAddedVideo] = useState('')

    // This useState takes care of likes count. It will increament by 1 if Likes/thumbUp is clicked,
    // and decreamentby 1 if dislike/thumbDown is clicked.
    const [likesDislikesCount, setLikesDislikesCount] = useState(0)

    // Increament likes count by 1
    const increament = () => {
        setLikesDislikesCount(likesDislikesCount + 1)
    }

    // Decreament likes count by 1, and don't allow 
    const increament = () => {
        setLikesDislikesCount(likesDislikesCount + 1)
    }
    


    // This function will add a video url to the array
    let arrayPlaylistFunc = (id) => {
        arrayPlaylist.push(`https://www.youtube.com/watch_popup?v=${id}`)
        console.log(arrayPlaylist)
    }

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

    // This function gets the serched id
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

            {/* <h1 onClick={
                () => getIndex(1)
            }>Click ME, I am Video Player</h1> */}

            <div className='iframe-and-videoCards-container' >

                {/* Video window with suggested videos */}
                <VideoWindow
                    videos={videos}
                    suggestedVodeos={suggestedVideos}
                />

                {/* The banner below the iframe containing Likes, dislikes, add to playlist... */}
                <LikesAddPlaylist // {/* Pass the arraylist function to capture all added videos */}
                    arrayPlaylistFunc={arrayPlaylistFunc} />

                {/* Display video cards */}
                <VideoCardsPlayer videos={videos}
                    suggestedVodeos={suggestedVideos}
                />

            </div>

        </div>
    )
}

export default VideoPlayer