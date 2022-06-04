import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Auth from './Components/Auth/Auth'




function App() {

  const [someData, setSomeData] = useState('');


  const getIndex = (index) => {
    setSomeData(index)
    // console.log(index)
  }

  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      {/* <HomePage /> */}
      <Auth/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex}/>} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App
