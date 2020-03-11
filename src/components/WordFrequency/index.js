import React, { useContext, useEffect, useState } from 'react';
import { Container, Title, List, Item } from './styles';

import { TextContext } from '../../context/TextContext';

let timer;

const WordFrequency = () => {
  const { wordFrequency, text } = useContext(TextContext);
  const [wordInfo, setWordInfo] = useState([]);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setWordInfo(wordFrequency);
    }, 1000);
  }, [text]);

  return (
    <Container>
      <Title>Word Frequency:</Title>
      <List>
        {wordInfo.map(word => (
          <Item key={word[0]}>{`${word[1]} - ${word[0]} (${word[2]}%)`}</Item>
        ))}
      </List>
    </Container>
  );
};

export default WordFrequency;
