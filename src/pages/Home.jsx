import '../Home.css';

import { useState } from 'react';

import Panel from '../Panel';
import Public from './Public';

const Home = () => {
  return (
    <div className="home-container">
      <Panel />
      <Public />
    </div>
  );
};

export default Home;
