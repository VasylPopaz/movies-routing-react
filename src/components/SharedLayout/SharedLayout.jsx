import React from 'react';
import { Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav, StyledNavLink } from './SharedLayout.styled';
import { Container } from 'styles/Container.styled';

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
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
