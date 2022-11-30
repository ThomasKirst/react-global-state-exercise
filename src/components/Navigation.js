import styled from 'styled-components';

export default function Navigation({ counts }) {
  return (
    <Container>
      <span>Learn more</span>
      <List>
        {Object.keys(counts).map((animal) => (
          <li key={animal}>
            <a
              href={'https://google.com/search?q=' + animal}
              target="_blank"
              rel="noreferrer"
            >
              {animal}
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1.5ch;
`;

const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 1ch;

  a:any-link {
    color: #1d8382;
    text-transform: capitalize;
  }
`;
