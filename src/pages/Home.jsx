import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendMovies } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { StyledTitle } from 'styles/Title.styled';

const Home = () => {
  const { data: movies } = useHttp(getTrendMovies);
  if (!movies) return;

  return (
    <>
      <StyledTitle>Trending today</StyledTitle>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
