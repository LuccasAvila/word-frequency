import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.secondary};
  padding: 0 24px;

  h1 {
    font-size: 1rem;
    color: ${props => props.theme.colors.text};
  }
`;

export const ThemeSwitch = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 1.125rem;
`;
