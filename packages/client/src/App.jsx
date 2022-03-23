import './styles/App.css';

import { Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import PageEdit from './pages/PageEdit';
import PublicPageView from './pages/PublicPageView';
import SignUp from './pages/SignUp';
import { AuthProvider } from './utils/auth';
import RequireAuth from './utils/RequireAuth';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/public/:id" element={<PublicPageView />} />
          <Route
            path="/editor-mode"
            element={
              <RequireAuth>
                <PageEdit />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
