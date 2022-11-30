import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export default function AppHeader({ counts }) {
  const thingsCounted = Object.values(counts).filter((count) => count !== 0)
    .length;

  return (
    <Title>
      CounterApp
      <span role="img" aria-label="trademark">
        ™
      </span>{' '}
      — currently counting <strong>{thingsCounted}</strong>{' '}
      {thingsCounted === 1 ? 'thing' : 'things'}.
    </Title>
  );
}
