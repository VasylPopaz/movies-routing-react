import { StyledLink } from 'components/Link/Link.styled';
import { StyledTitle } from 'components/Title/Title.styled';
import React from 'react';

const NotFound = () => {
  return (
    <div>
      <StyledLink to="/">Go home...</StyledLink>
      <StyledTitle>Sorry... Page is not found!</StyledTitle>
    </div>
  );
};

export default NotFound;