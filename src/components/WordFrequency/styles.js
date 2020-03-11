import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  padding: 16px;
  background: #f7faff;
  border: 2px solid #f1f1f1;
`;

export const Title = styled.p`
  font-size: 1.5rem;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 8px;
`;

export const Item = styled.li``;

export const Loading = styled.div`
  height: 128px;
  background: #aaa;
  animation: fading 1.5s infinite;

  @keyframes fading {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.1;
    }
  }
`;
