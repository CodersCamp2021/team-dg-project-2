import './App.css';

import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Public from './pages/Public';

function App() {
  return (
    <div className="App">
      <nav className="main-nav">
        <Link to="/" className="text-link">
          Home
        </Link>
        <Link to="public" className="text-link">
          Public
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="public" element={<Public />} />
      </Routes>
    </div>
  );
}

export default App;
