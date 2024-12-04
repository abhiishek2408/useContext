import React from 'react';
import { useAuth } from './AuthContext';

const Dashboard = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <h1>Welcome to the Dashboard!</h1>
      ) : (
        <h1>Please login to access the Dashboard.</h1>
      )}
    </div>
  );
};

export default Dashboard;
