import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import DashboardView from './pages/DashboardView';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PublicPage from './pages/PublicPage';
import SignupForm from './pages/Register/SignupForm';
import TestBuild from './pages/TestBuild';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<PublicPage />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard-view" element={<DashboardView />} />
        <Route path="/test-build" element={<TestBuild />} />
      </Routes>
    </div>
  );
};

export default App;
