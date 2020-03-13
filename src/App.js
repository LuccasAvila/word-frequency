import React from 'react';
import { ThemeProvider } from 'styled-components';
import dark from './styles/themes/dark';

import GlobalStyle from './styles/global';
import Main from './components/Main';
import Header from './components/Header';

import TextProvider from './context/TextContext';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <TextProvider>
        <Header />
        <Main />
        <GlobalStyle />
      </TextProvider>
    </ThemeProvider>
  );
}

export default App;
