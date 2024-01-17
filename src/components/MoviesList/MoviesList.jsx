import React from 'react';

import { StyledList } from './MoviesList.styled';
import { StyledLink } from 'styles/Link.styled';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) return;
  return (
    <StyledList>
      {movies.map(movie => (
        <li key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </StyledLink>
        </li>
      ))}
    </StyledList>
  );
};
