import styled from "styled-components";
import CounterList from "./CounterList";

const Container = styled.section`
  max-width: 75ch;
`;

export default function MainContent() {
  return (
    <Container>
      <CounterList />

      <article>
        <h2>About Counters</h2>
        <p>
          Even though this page is not about the furniture, here is some info
          about it to fill the space:
        </p>
        <figure>
          <blockquote cite="https://en.wikipedia.org/wiki/Counter_(furniture)">
            <p>
              A counter is a piece of furniture. Counters consist of a
              countertop, a raised surface which can be used to place objects or
              serve food on them. Similar to a table, counters are typically
              raised platforms, but are often embedded into flooring as fixed
              installations. Chairs or stools are often arranged around a
              counter for seating purposes.
            </p>
          </blockquote>
          <figcaption>
            — Counters on <cite>Wikipedia</cite>
          </figcaption>
        </figure>
      </article>
    </Container>
  );
}
