import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Theme provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is light

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Apply the theme to the body element
  useEffect(() => {
    document.body.className = theme === 'light' ? 'bg-white' : 'bg-black';
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
