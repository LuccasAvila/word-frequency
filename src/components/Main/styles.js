import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.colors.secondary};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-top: 10vh;
`;

export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 320px;
  font-size: 1.125rem;
  padding: 8px;
  background: ${props => props.theme.colors.primary};
  border: none;
  color: white;
`;
