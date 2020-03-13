import React from 'react';
import GlobalStyle from './styles/global';
import Main from './components/Main';
import Header from './components/Header';

import TextProvider from './context/TextContext';

function App() {
  return (
    <TextProvider>
      <Header />
      <Main />
      <GlobalStyle />
    </TextProvider>
  );
}

export default App;
