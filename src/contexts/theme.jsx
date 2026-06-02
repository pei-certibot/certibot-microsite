import { createContext, useContext, useState, useEffect } from 'react';

const LIGHT = 'certibot';
const DARK  = 'certibot-dark';

const ThemeCtx = createContext({ isDark: false, toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem('cb-theme') === DARK
  );

  useEffect(() => {
    const theme = isDark ? DARK : LIGHT;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cb-theme', theme);
  }, [isDark]);

  return (
    <ThemeCtx.Provider value={{ isDark, toggleTheme: () => setIsDark(d => !d) }}>
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
