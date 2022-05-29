import loading from './../loading.svg';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm';
import VideoCards from './VideoCards';
import VideoWindow from './VideoWindow';



function HomePage() {
    // Declare a variable to hold the typed string
    const [searchedString, setSearchedString] = useState('');

    // Declare a variable that will hold the video link and other information.
    const [videoLink, setVideoLink] = useState([]);

    // Declare an object to hold data return from the second API call. Initialize it to an empty array.
    const [videoStat, setVideoStat] = useState([]);

    const [videoId, setVideoId] = useState('');

    // view count
    const [views, setViews] = useState([]);

    // Likes
    const [likes, setLikes] = useState([]);

    // This array contains all views;
    let arrayViews = []



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

        // This API is responsible for getting the video's id that we will use in the second API statstical information about the video.
        let urlVideoId = `${apiVideoId.api}${searchedString}&key=${apiVideoId.key}`;

        await axios.get(urlVideoId)
            .then((data) => {
                // console.log(data);
                setVideoLink(data)
                // console.log(data.data.items[0].id.videoId.length);
                // setSearchedObject(data)

                // Check if the result fron the first API is not empty.
                if (data) {

                    setVideoId(data.data.items)

                    const arrayStatistics = [];
                    const arrayViews = [];
                    const arrayLikes = [];

                    data.data.items.forEach((item) => {

                        // console.log(item)

                        let urlVideoStat = `${apiVideoStat.api}${item.id.videoId}&key=${apiVideoId.key}&part=snippet,statistics&fields=items(id,snippet,statistics)`

                        axios.get(urlVideoStat)
                            .then((result) => {
                                // console.log(result)

                                arrayStatistics.push(result.data)

                                IF(result.data.item.le)

                                console.log(arrayStatistics)
                                // arrayLikes.push(result.data.items[0].statistics.likeCount)
                                // arrayViews.push(result.data.items[0].statistics.viewCount)
                            })

                    })
                    // The API below gets us statistical information.

                
                    setVideoStat(arrayStatistics)


                }

                else {
                    console.log('No reesult')
                }

            });
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

export default HomePage
















// import React, { useState, useEffect } from 'react'
// import Header from './Header'
// import History from './History'


// async function searchYouTube(q) {
//     q = encodeURIComponent(q);
//     const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
//             "x-rapidapi-key": '9877f2eb6bmshad910d1fedcdf8ep13db1ejsn07b69fdb0f8c'
//         }
//     });
    
//     console.log(response)
    
//     const body = await response.json();
//     // console.log(body);
//     return body.items.filter(item => item.type === 'video');
// }



// function HomePage() {

//     const [query, setQuery] = React.useState('Music');
//     const [list, setList] = React.useState(null);
//     const search = (e) => {
//         e.preventDefault();
//         searchYouTube(query).then(setList);
//     };



//     return (
//         <>
//             <Header />
//             <div className="app">

//                 <form onSubmit={search}>
//                     <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
//                     <button>Search</button>
//                 </form>

//                 {list &&
//                     (list.length === 0
//                         ? <p>No results</p>
//                         : (
//                             <ul className="items">
//                                 {list.map(item => (
//                                     <li className="item" key={item.id}>
//                                         <div>
//                                             <b><a href={item.url}>{item.title}</a></b>
//                                             <p>{item.description}</p>
//                                         </div>
//                                         <ul className="meta">
//                                             <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
//                                             <li>Views: {item.views}</li>
//                                             <li>Duration: {item.duration}</li>
//                                             <li>Uploaded: {item.uploadedAt}</li>
//                                         </ul>
//                                         <img alt="" src={item.bestThumbnail.url} height="75" />
//                                     </li>
//                                 ))}
//                             </ul>
//                         )
//                     )
//                 }
//             </div>
//             <History />
//         </>
//     );
// }

//export default HomePage








