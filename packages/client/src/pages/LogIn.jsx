import { useState } from 'react';

import LoginForm from '../components/LoginForm';

function LogIn() {
  const adminUser = {
    email: 'test@email.com',
    password: 'test123',
  };

  const [user, setUser] = useState({
    email: '',
  });

  const [error, setError] = useState('');

  const LoginDetails = (details) => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        email: details.email,
      });
    } else {
      setError('Invalid email or password!');
    }
  };

  return (
    <div className="App">
      {user.email !== '' ? (
        <div>{(window.location.pathname = '/try-it-out')}</div>
      ) : (
        <LoginForm Login={LoginDetails} error={error} />
      )}
    </div>
  );
}

export default LogIn;
