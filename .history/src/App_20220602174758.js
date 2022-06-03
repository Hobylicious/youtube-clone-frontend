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


  const getIndex = (index) => {
    setSomeData(index)
  }

  // Declare a function  that will be called to hold vi

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex} />} />
        <Route path='/createPlaylist' element={<CreatePlaylist />} />
        <Route path='/comments' element={<Comments/>} />
      </Routes>


    </div>
  );
}

export default App
