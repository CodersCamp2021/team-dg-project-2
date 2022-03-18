import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PageEdit from './pages/PageEdit';
import PublicPageView from './pages/PublicPageView';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/public" element={<PublicPageView />} />
        <Route path="/editor-mode" element={<PageEdit />} />
      </Routes>
    </div>
  );
};

export default App;
