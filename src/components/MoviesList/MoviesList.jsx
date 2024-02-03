import { useLocation } from 'react-router-dom';
//
import { StyledLink } from 'components/Link/Link.styled';
import { StyledList } from './MoviesList.styled';

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
