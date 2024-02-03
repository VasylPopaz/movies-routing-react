import { MoviesList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
//
import { getTrendMovies } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { StyledTitle } from 'components/Title/Title.styled';

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
    <div>
      <StyledTitle>Trending today</StyledTitle>
      {isLoading ? <Loader /> : null}
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
