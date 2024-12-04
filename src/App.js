import React from 'react';
import { useAuth } from './AuthContext';
import LoginButton from './LoginButton';
import Dashboard from './Dashboard';

function App() {
  const { isAuthenticated } = useAuth(); // Accessing authentication state

  return (
    <div>
      <h1>Authentication Context Demo</h1>
      <p>{isAuthenticated ? 'You are logged in!' : 'You are logged out.'}</p>
      <LoginButton />
      <Dashboard />
    </div>
  );
}

export default App;
