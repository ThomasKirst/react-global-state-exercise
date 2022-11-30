import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import MainContent from './MainContent';
import Navigation from './Navigation';

export default function AppLayout() {
  return (
    <StyledGrid>
      <StyledHeader>
        <Header />
      </StyledHeader>

      <StyledAside>
        <Sidebar />
      </StyledAside>

      <StyledMain>
        <MainContent />
      </StyledMain>

      <StyledNav>
        <Navigation />
      </StyledNav>

      <StyledFooter>
        <Footer />
      </StyledFooter>
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: grid;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(10px, 2fr) minmax(10px, 5fr);
  grid-template-rows: min-content 1fr min-content min-content;
  gap: 0.5rem;

  > * {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`;

const StyledHeader = styled.header`
  grid-column: 1 / -1;
  background: #111;
  color: #eee;
`;

const StyledAside = styled.aside`
  grid-column: 1 / 2;
  grid-row: 2 / 4;
  background: #fbf8f1;
`;

const StyledNav = styled.nav`
  grid-column: 2 / 3;
`;

const StyledMain = styled.main`
  grid-column: 2 / 3;
`;

const StyledFooter = styled.footer`
  grid-column: 1 / -1;
  background: #111;
  color: #eee;
`;
