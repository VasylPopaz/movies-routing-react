import { Suspense, useRef } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
//
import { BackLink } from 'components/BackLink/BackLink';
import Loader from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
//
import { getMovieDetailsById } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { StyledTitle } from 'components/Title/Title.styled';

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
    <div>
      <BackLink to={backLinkHref.current}></BackLink>
      <MovieInfo selectedMovie={selectedMovie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default MovieDetails;
