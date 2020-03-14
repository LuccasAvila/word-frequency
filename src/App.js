import React from 'react';
import { ThemeProvider } from 'styled-components';
import usePersistentState from './utils/usePersistentState';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

import GlobalStyle from './styles/global';
import Main from './components/Main';
import Header from './components/Header';

import TextProvider from './context/TextContext';

function App() {
  const [theme, setTheme] = usePersistentState('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.theme === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <TextProvider>
        <Header toggleTheme={toggleTheme} />
        <Main />
        <GlobalStyle />
      </TextProvider>
    </ThemeProvider>
  );
}

export default App;
