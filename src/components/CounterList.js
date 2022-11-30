import styled from 'styled-components';
import Counter from './Counter';

/*
{
  cats: 2,
  dogs: 0,
  sheep: 0,
  dragons: 0
}
==> Object.entries(counts)
[
  [ 'cats', 2 ],
  [ 'dogs', 0 ],
  [ 'sheep', 0 ],
  [ 'dragons', 0 ]
]
*/

export default function CounterList({ counts, onChangeCount }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {Object.entries(counts).map(([animal, count]) => {
          return (
            <li>
              <Counter
                name={animal}
                count={count}
                onChangeCount={onChangeCount}
              />
            </li>
          );
        })}
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
