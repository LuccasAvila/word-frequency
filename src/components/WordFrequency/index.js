import React, { useContext, useEffect, useState } from 'react';
import { Container, Title, List, Item, Loading } from './styles';

import { TextContext } from '../../context/TextContext';

let timer;

const WordFrequency = () => {
  const { wordFrequency, text } = useContext(TextContext);
  const [wordInfo, setWordInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer) {
      setLoading(true);
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setWordInfo(wordFrequency);
      setLoading(false);
    }, 1000);
  }, [text]);

  return (
    <Container>
      <Title>Word Frequency:</Title>
      <List>
        {loading ? (
          <Loading />
        ) : (
          wordInfo.map(word => (
            <Item key={word[0]}>{`${word[1]} - ${word[0]} (${word[2]}%)`}</Item>
          ))
        )}
      </List>
    </Container>
  );
};

export default WordFrequency;
