import React from 'react';
import  './HeroSection.css';
import { Button } from './Button';

function HeroSection() {
    return (
      <div className='hero-container'>
          <video src='/videos/video-2.mp4' autoPlay muted loop></video>
          <h1>ADVENTURE AWAITS</h1>
          <p>what are you waiting for?</p>
          <div className='hero-btns'>
              <Button className='btns btn btn--outline btn--large'>GET STARTED</Button>
              <Button className='btns btn btn--primary btn--large'>WATCH TRAILER<i className='far fa-play-circle' /></Button>
          </div>
      </div>
    )
}

export default HeroSection;
