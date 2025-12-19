import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const themeColors = {
  light: {
    background: '#FFFFFF',
    text: '#103b81ff',
    cardBackground: '#FFFFFF',
    headerBorder: '#FF0000',
    footerBackground: '#231B4E',
    footerText: '#FFFFFF',
    buttonBackground: '#54BCEB',
    logoText: '#000000',
    menuTextBorder: 'powderblue',
    iconColor: '#103b81ff',
  },
  dark: {
    background: '#151515ff',
    text: '#E0E0E0',
    cardBackground: '#1E1E1E',
    headerBorder: '#ffffffff',
    footerBackground: '#0D0D15',
    footerText: '#E0E0E0',
    buttonBackground: '#54BCEB',
    logoText: '#FFFFFF',
    menuTextBorder: 'powderblue',
    iconColor: '#FFFFFF',
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return 'dark';
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const colors = themeColors[theme];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};
