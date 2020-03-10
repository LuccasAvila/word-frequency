import React, { useContext } from 'react';
import { Container, Title, List, Item } from './styles';

import { TextContext } from '../../context/TextContext';

const WordFrequency = () => {
  const context = useContext(TextContext);

  return (
    <Container>
      <Title>Word Frequency:</Title>
      <List>
        <Item>1 - Lorem (15%)</Item>
      </List>
    </Container>
  );
};

export default WordFrequency;
