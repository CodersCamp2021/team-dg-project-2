import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/login/LoginLogic';
import PageEdit from './pages/PageEdit';
import PublicPageView from './pages/PublicPageView';
import SignupForm from './pages/Register/SignupForm';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<PublicPageView />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/editor-mode" element={<PageEdit />} />
      </Routes>
    </div>
  );
};

export default App;
