import { BackLink } from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { StyledTitle } from 'components/Title/Title.styled';
import { getMovieDetailsById } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();

  const {
    data: selectedMovie,
    error,
    isLoading,
  } = useHttp(getMovieDetailsById, id);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');
  if (!selectedMovie)
    return (
      <>
        {isLoading && <Loader />}
        {error && <StyledTitle>{error}</StyledTitle>}
      </>
    );

  return (
    <>
      <BackLink to={backLinkHref.current}></BackLink>
      <MovieInfo selectedMovie={selectedMovie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
