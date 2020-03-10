import React, { useContext } from 'react';
import { Container } from './styles';
import StatsItem from './StatsItem';
import { TextContext } from '../../context/TextContext';

const Stats = () => {
  const { countChars, countWords } = useContext(TextContext);
  const chars = countChars();
  const words = countWords();

  return (
    <Container>
      <StatsItem count={chars} item="Characters" />
      <StatsItem count={words} item="Words" />
    </Container>
  );
};

export default Stats;
