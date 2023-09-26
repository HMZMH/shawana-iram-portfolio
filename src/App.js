import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import flower_video from './images/flower_video.mp4';
import Section1 from './sections/Section1';

function Home() {
  return (
    <div className='fluid-container'>

      <video className='background-video' src={flower_video} autoPlay loop muted />

      <div className='navigation-menu'>
        <ul>
          <li><Link to="/about" className='link'>About Me</Link></li>
          <li>My Skills</li>
          <li>My Experience</li>
          <li>Contact Me</li>
        </ul>
      </div>

      <div className='main-title'>
        <h1>Hi, I'm Shawana!
          <br />A Care Coordinator :)</h1>
      </div>
      
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<Section1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;