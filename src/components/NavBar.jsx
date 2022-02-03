import '../styles/NavBar.css';

import { Link } from 'react-router-dom';

import logo from '../../public/logo.svg';

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <Link to="/" className="text-logo">
          Thats.me
        </Link>
      </div>
      <div className="nav-links">
        <Link to="sign-up" className="text-link">
          Create yours
        </Link>
        <Link to="log-in" className="text-link">
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
