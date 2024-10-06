// src/context/AppContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Create a custom hook to use the AppContext
export const useAppContext = () => {
  return useContext(AppContext);
};

// Create the provider component
export const AppProvider = ({ children }) => {
  // Declare your state variables here
  const [user, setUser] = useState(null); // Currently logged-in user
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status
  const [theme, setTheme] = useState('light'); // Theme state

  // Function to log in a user
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Function to log out a user
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
