import React from 'react';
import { useAuth } from './AuthContext';

const LoginButton = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <button onClick={isAuthenticated ? logout : login}>
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

export default LoginButton;
