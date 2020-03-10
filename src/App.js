import React from 'react';
import GlobalStyle from './styles/global';
import Main from './components/Main';

import TextProvider from './context/TextContext';

function App() {
  return (
    <TextProvider>
      <Main />
      <GlobalStyle />
    </TextProvider>
  );
}

export default App;
