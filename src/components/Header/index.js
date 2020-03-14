import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa';
import { Container, ThemeSwitch } from './styles';

const Header = ({ toggleTheme }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container>
      <h1>Word Frequency</h1>
      <ThemeSwitch onClick={toggleTheme}>
        {theme === 'dark' ? <FaLightbulb /> : <FaRegLightbulb />}
      </ThemeSwitch>
    </Container>
  );
};

Header.propTypes = { toggleTheme: PropTypes.func.isRequired };

export default Header;
