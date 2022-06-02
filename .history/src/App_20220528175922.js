import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div className="App">
      {/* <VideoPlayer /> */}
      {/* <HomePage /> */}

      <Routes>
        <Route path='/'/>
        <Route path='/videoPlayer' element={<VideoPlayer videoId={videoId} videos={videos} videoStat={videoStat} views={views} likes={likes} />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App
