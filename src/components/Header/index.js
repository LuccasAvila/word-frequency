import React from 'react';
import PropTypes from 'prop-types';
import { FaLightbulb } from 'react-icons/fa';
import { Container, ThemeSwitch } from './styles';

const Header = ({ toggleTheme }) => {
  return (
    <Container>
      <h1>Word Frequency</h1>
      <ThemeSwitch onClick={toggleTheme}>
        <FaLightbulb />
      </ThemeSwitch>
    </Container>
  );
};

Header.propTypes = { toggleTheme: PropTypes.func.isRequired };

export default Header;
