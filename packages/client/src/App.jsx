import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import DashboardView from './pages/DashboardView';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PublicPage from './pages/PublicPage';
import SignUp from './pages/SignUp';
import TestBuild from './pages/TestBuild';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/public" element={<PublicPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard-view" element={<DashboardView />} />
        <Route path="/try-it-out" element={<TestBuild />} />
      </Routes>
    </div>
  );
};

export default App;
