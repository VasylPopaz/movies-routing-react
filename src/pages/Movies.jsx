import { MoviesList } from 'components/MoviesList/MoviesList';
import Searchbar from 'components/Searchbar/Searchbar';
import { StyledTitle } from 'components/Title/Title.styled';
import { getMovieByQuery } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movie = searchParams.get('query');
    if (!movie) return;

    getMovieByQuery(movie)
      .then(res => {
        if (!res.length) {
          setError(`Sorry, there are no movies matching your search query. Please try
          again.`);
          setMovies(null);
          return;
        }
        setMovies(res);
        setError(null);
      })
      .catch(error => console.log(error.message));
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <Searchbar onSearch={handleSubmit} />
      {error && <StyledTitle>{error}</StyledTitle>}
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;