import React, { useState, createContext, useContext } from 'react';
import {
  ThemeProvider as ThemeStyledComponents,
  DefaultTheme,
} from 'styled-components';

import light from '../styles/light';
import dark from '../styles/dark';
import { setLocalStorage, useLocalStorage } from './AuthLocal';

interface ThemeContextData {
  theme: DefaultTheme;
  changeTheme(): void;
  currentThemeDarkOrLight: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

interface Props {
  children: React.ReactElement;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const localStorage = useLocalStorage();
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(
    localStorage.theme,
  );

  const currentThemeDarkOrLight = React.useMemo(() => {
    if (currentTheme.title === 'dark') return true;
    return false;
  }, [currentTheme]);

  const changeTheme = React.useCallback(() => {
    if (currentTheme.title === 'dark') {
      setCurrentTheme(light);
      return setLocalStorage('theme', light);
    } else {
      setCurrentTheme(dark);
      setLocalStorage('theme', dark);
    }
  }, [currentTheme.title]);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        changeTheme,
        currentThemeDarkOrLight,
      }}
    >
      <ThemeStyledComponents theme={currentTheme}>
        {children}
      </ThemeStyledComponents>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('usetheme must be use with in an ThemeProvider');
  }

  return context;
}

export { ThemeProvider, useTheme };
