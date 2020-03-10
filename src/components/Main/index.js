import React, { useContext } from 'react';
import { Container, TextArea } from './styles';
import { TextContext } from '../../context/TextContext';

import Stats from '../Stats';

const Main = () => {
  const { text, setText } = useContext(TextContext);

  return (
    <Container>
      <Stats />
      <TextArea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Paste or write the text here..."
      />
    </Container>
  );
};

export default Main;
