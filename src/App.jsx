import './App.css';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<PublicPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<LogIn />} />
      </Routes>
    </div>
  );
};

export default App;
