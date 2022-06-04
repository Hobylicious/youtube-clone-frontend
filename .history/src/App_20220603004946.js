import './App.css';
import HomePage from './Components/HomePage';
import VideoPlayer from './Components/VideoPlayer';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import CreatePlaylist from './Components/CreatePlaylist';
import Comments from './Components/Comments';
ErrorBoundary = './Components/ErrorBoundary';


function App() {

  const [someData, setSomeData] = useState('');

  // Declare variables to hold username and password.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const getIndex = (index) => {
    setSomeData(index)
  }

  return (
    <ErrorBoundary>
      <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videoPlayer/:id' element={<VideoPlayer getIndex={getIndex} />} />
        <Route path='/createPlaylist' element={<CreatePlaylist />} />
        <Route path='/comments' element={<Comments/>} />
      </Routes>


    </div>
    </ErrorBoundary>
    
  );
}

export default App
