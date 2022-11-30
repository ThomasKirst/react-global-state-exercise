import styled from 'styled-components';
import Counter from './Counter';

export default function CounterList() {
  return (
    <>
      <h2>Counters</h2>
      <List>
        <li>
          <Counter name="Cats" />
        </li>
        <li>
          <Counter name="Dogs" />
        </li>
        <li>
          <Counter name="Sheep" />
        </li>
        <li>
          <Counter name="Dragons" />
        </li>
      </List>
    </>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 1rem;
`;
