import React from 'react';
import { Container } from './styles';
import StatsItem from './StatsItem';

const Stats = () => {
  return (
    <Container>
      <StatsItem count="30" item="Characters" />
      <StatsItem count="10" item="Words" />
    </Container>
  );
};

export default Stats;
