import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${props => props.theme.colors.primary};
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text};
`;

export default Container;
