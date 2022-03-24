import '../styles/NavBar.css';
import '../styles/Button.css';

import { Link, useNavigate } from 'react-router-dom';

import logo from '../../public/logo.svg';
import { useAuth } from '../utils/auth';

const NavBar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <div className="logo">
        <img src={logo} alt="logo" />
        <Link to="/" className="text-logo">
          Thats.me
        </Link>
      </div>
      {!auth.user ? (
        <div className="nav-links">
          <Link to="sign-up" className="text-link">
            Create yours
          </Link>
          <Link to="log-in" className="text-link">
            Log in
          </Link>
        </div>
      ) : (
        <div className="nav-links">
          <button className="btn btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
