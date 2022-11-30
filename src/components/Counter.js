import { useState } from 'react';
import styled from 'styled-components';

export default function Counter({ name }) {
  const [count, setCount] = useState(0);
  return (
    <Container>
      <strong>{name}:</strong>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1ch;
  align-items: center;

  > :first-child {
    min-width: 8ch;
  }

  > span {
    min-width: 2ch;
    text-align: center;
  }
`;
