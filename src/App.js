import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import flower_video from './images/flower_video.mp4';
import Section1 from './sections/Section1';

function App() {
  return (
    <div className='fluid-container'>

      <video className='background-video' src={flower_video} autoPlay loop muted />

      <div className='navigation-menu'>
        <ul>
          <li>About Me</li>
          <li>My Skills</li>
          <li>My Experience</li>
          <li>Contact Me</li>
        </ul>
      </div>

      <section className='sections'>
        <div className='main-title'>
          <h1>Hi, I'm Shawana!<br/>A Care Coordinator :)</h1>
        </div>
      </section>
      
      <section className='sections'>
        <Section1 />
      </section>
      
    </div>
  );
}

export default App;