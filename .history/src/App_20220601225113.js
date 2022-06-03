import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CreatePlaylist from './Components/CreatePlaylist';



function App() {

  const [someData, setSomeData] = useState('');

  const getIndex = (index) => {
    setSomeData(index)
  }

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex} />} />
        <Route path='/createPlaylist' element={<CreatePlaylist />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>


    </div>
  );
}

export default App
