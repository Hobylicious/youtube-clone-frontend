import './App.css';
import HomePage from './Components/HomePage/HomePage';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from './Components/ErrorPage';



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

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex}/>} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App