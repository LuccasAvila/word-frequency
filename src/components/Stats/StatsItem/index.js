import React from 'react';
import { Container, Count, Item } from './styles';

const StatsItem = ({ count, item }) => {
  return (
    <Container>
      <Count>{count}</Count>
      <Item>{item}</Item>
    </Container>
  );
};

export default StatsItem;
