import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Container, ThemeSwitch } from './styles';

const Header = () => {
  return (
    <Container>
      <h1>Word Frequency</h1>
      <ThemeSwitch>
        <FaLightbulb />
      </ThemeSwitch>
    </Container>
  );
};

export default Header;
