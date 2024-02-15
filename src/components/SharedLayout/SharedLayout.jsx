import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//
import { StyledHeader, StyledNav, StyledNavLink } from './SharedLayout.styled';
import { Container, Loader } from 'components';

const SharedLayout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
      </StyledHeader>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
