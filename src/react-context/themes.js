import React, { createContext, useState, useCallback } from 'react';

export const themes = {
  light: {
    name: 'light',
    colors: {
      primary: 'navy',
      background: 'lightgrey',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      primary: 'lightskyblue',
      background: 'black',
    },
  },
};

export const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);
  const updateTheme = useCallback((themeName) => setTheme(themes[themeName]), [setTheme]); //useCallback

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context;
}

export function withTheme(Component) {
  return props => <Component {...props} theme={useTheme().theme} />
}