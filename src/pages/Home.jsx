import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendMovies } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { StyledTitle } from 'components/Title/Title.styled';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const { data: movies, error, isLoading } = useHttp(getTrendMovies);
  if (!movies)
    return (
      <>
        {isLoading && <Loader />}
        {error && <StyledTitle>{error}</StyledTitle>}
      </>
    );

  return (
    <>
      <StyledTitle>Trending today</StyledTitle>
      {isLoading ? <Loader /> : null}
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;
