import '../styles/Home.css';

import { useState } from 'react';

import frame from '/Frame 19.png';

import Button from '../components/Button.jsx';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="text-content">
          <h1>Build your portfolio website</h1>
          <h5>One page in less than 5 minutes!</h5>
          <Button />
        </div>
        <div className="image-container">
          <img src={frame} className="frame" alt="showcase-img" />
        </div>
        <div className="wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
