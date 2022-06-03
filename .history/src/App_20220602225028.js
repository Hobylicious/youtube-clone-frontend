import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CreatePlaylist from './Components/CreatePlaylist';
import Comments from './Components/Comments';


function App() {

  const [someData, setSomeData] = useState('');
  const [videoObject, setVideoObject] = useState([]);

  // Declare variables to hold username and password.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const getIndex = (index) => {
    setSomeData(index)
  }

  // Declare a function  that will be called to hold the playing video object
  const getVideoObject = (video) => {
    setVideoObject(video)
    console.log(videoObject)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex} getVideoObject={getVideoObject} videoObject={vi}/>} />
        <Route path='/createPlaylist' element={<CreatePlaylist />} />
        <Route path='/comments' element={<Comments/>} />
      </Routes>


    </div>
  );
}

export default App
