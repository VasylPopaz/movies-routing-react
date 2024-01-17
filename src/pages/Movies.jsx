import { MoviesList } from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { getMovieByQuery } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('movie');
    if (!movie) return;
    getMovieByQuery(movie)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error.message));
  }, [searchParams]);

  const handleSubmit = movie => {
    setSearchParams({ movie });
  };
  return (
    <>
      <Searchbar onSearch={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
