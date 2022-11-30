import styled from "styled-components";

const Title = styled.h1`
  font-size: 1rem;
  margin: 0;
`;

export default function AppHeader() {
  return (
    <Title>
      CounterApp
      <span role="img" aria-label="trademark">
        ™
      </span>{" "}
      — currently counting <strong>?</strong> things.
    </Title>
  );
}
