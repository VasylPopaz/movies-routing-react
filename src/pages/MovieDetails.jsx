import { BackLink } from 'components/BackLink/BackLink';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { getMovieDetailsById } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import { Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const { data: selectedMovie } = useHttp(getMovieDetailsById, id);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  if (!selectedMovie) return;
  return (
    <>
      <BackLink to={backLinkHref}></BackLink>
      <MovieInfo selectedMovie={selectedMovie} />
      <Outlet />
    </>
  );
};
export default MovieDetails;
