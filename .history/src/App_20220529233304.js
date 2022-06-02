import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';



function App() {

  const [someData, setSomeData] = useState('');

  // This array will hold added videos as playlist.
  let arra

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
        <Route path='/err' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex}/>} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App
