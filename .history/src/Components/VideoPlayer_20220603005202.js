import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCardsPlayer';
import VideoWindow from './VideoWindow';
import { home } from "react-icons/fc";
import HomePage from './HomePage';
import VideoCardsPlayer from './VideoCardsPlayer';
import { useParams } from 'react-router-dom';
import LikesAddPlaylist from './LikesAddPlaylist';
import LikeDislike from './LikeDislike';
ErrorBoundary = './Components/ErrorBoundary';




function VideoPlayer() {

    const { id } = useParams()

    // This holds videos
    const [videos, setVideos] = useState([])

    // This holds seggested videos
    const [suggestedVideos, setSuggestedVideos] = useState([])

    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('');

    // This array will hold added videos as playlist.
    let arrayPlaylist = [];
    const [addVideo, setAddedVideo] = useState('')

    // This useState takes care of likes count. It will increament by 1 if Likes/thumbUp is clicked,
    // and decreamentby 1 if dislike/thumbDown is clicked.
    const [likesDisLikeCount, setLikesDisLikeCount] = useState(0);

    const [videoObject, setVideoObject] = useState([]);




    // This function formats views to K, M...
    const viewsFunc = (num) => {
        if (num < 1000) return num;
        else if ((num > 999) && (num < 1000000)) {
            num = (num / 1000).toFixed(1);
            return num + 'K';
        }
        else if ((num >= 1000000) && (num < 1000000000)) {
            num = (num / 1000000).toFixed(1);
            return num + 'M';
        }

        else if ((num > 1000000000) && (num < 1000000000000)) {
            num = (num / 1000000000).toFixed(1);
            return num + 'B';
        }
    }

    // Increament likes count by 1
    const increment = () => {
        likesDisLikeCount === 0 ? setLikesDisLikeCount(likesDisLikeCount + 1) : setLikesDisLikeCount(likesDisLikeCount);
    }

    // icreament likes count by 1
    const decrement = () => {
        likesDisLikeCount === 1 ? setLikesDisLikeCount(likesDisLikeCount - 1) : setLikesDisLikeCount(likesDisLikeCount);
    }


    // Declare a function  that will be called to hold the playing video object
    const getVideoObject = (video) => {
        setVideoObject(video)
        console.log(videoObject)
    }



    // This function will add a video url to the array
    let arrayPlaylistFunc = (id) => {
        arrayPlaylist.push(`https://www.youtube.com/watch_popup?v=${id}`)
        // console.log(arrayPlaylist)
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
            // console.log(response.data.items)

            // Insert addtional properties such as likes, comments,...
            response.data.items.forEach(item => {
                item.likes = false;
                item.comments = [''];
                item.myViews = null;
            })

            setVideos(response.data.items)
            setSuggestedVideos(response.data.refinements)
            // console.log(response.data.items[0])

        }).catch(function (error) {
            console.error(error);
        });
    }

    // This function gets the serched id and pass it the function
    useEffect(() => {
        getSearchedId(id)
    }, [])

    // Provide the searched string to the youtube API.
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
            setSuggestedVideos(response.data.refinements)
            // console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });
    }


    return (
        <ErrorBo
        <div className='video-player-body video-player-body-player'>
            {/* Searched form */}
            <SearchForm
                searchedString={searchedString}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            {/* <h1 onClick={
                () => getIndex(1)
            }>Click ME, I am Video Player</h1> */}

            <div className='iframe-and-videoCards-container iframe-and-videoCards-container-player' >

                {/* Video window with suggested videos */}
                <VideoWindow
                    videos={videos}
                    suggestedVideos={suggestedVideos}
                    getVideoObject={getVideoObject}
                    viewsFunc = {viewsFunc}
                />

                {/* Display video cards */}
                <VideoCardsPlayer videos={videos}
                    suggestedVideos={suggestedVideos}
                    viewsFunc={viewsFunc}
                />
            </div>

            {/* The banner below the iframe containing Likes, dislikes, add to playlist... */}
            <LikesAddPlaylist // {/* Pass the arraylist function to capture all added videos */}
                arrayPlaylistFunc={arrayPlaylistFunc}
                increment={increment}
                decrement={decrement}
                likesDisLikeCount={likesDisLikeCount}
                getVideoObject={getVideoObject}
                videoObject={videoObject}
                viewsFunc={viewsFunc}
            />

        </div>
    )
}

export default VideoPlayer