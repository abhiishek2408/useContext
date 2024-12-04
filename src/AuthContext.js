import React, { createContext, useState, useContext } from 'react';

// Create the Authentication Context
const AuthContext = createContext();

// Provide the Authentication Context
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = () => {setIsAuthenticated(true);};
  const logout = () => {setIsAuthenticated(false);};

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for easier access to the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};



/**The createContext() function is part of React's Context API and is used to create a context object. 
 * This context object allows you to share values (like state, data, or functions) between components 
 * without having to explicitly pass props through every level of the component tree.

Key Points
Purpose: Helps to manage global or shared state in a React application.
Use Cases: For scenarios like theming, user authentication, or language settings, where data needs to be 
accessed by multiple components at different levels of the hierarchy. */