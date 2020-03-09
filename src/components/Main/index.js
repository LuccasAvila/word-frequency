import React from 'react';
import { Container, TextArea } from './styles';

import Stats from '../Stats';

const Main = () => {
  return (
    <Container>
      <Stats />
      <TextArea placeholder="Paste or write the text here..." />
    </Container>
  );
};

export default Main;
