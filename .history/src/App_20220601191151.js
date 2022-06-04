import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {

  const [someData, setSomeData] = useState('');


  const getIndex = (index) => {
    setSomeData(index)
    // console.log(index)
  }

  useEffect(() => {
    axios.get('https://youtube-clone-backend-ga.herokuapp.com/api/video/getVideos')
    .then(res => console.log(res))

    
  }, [])

  const apiVideo = () => {
    
  }

  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      {/* <HomePage /> */}

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex}/>} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App
