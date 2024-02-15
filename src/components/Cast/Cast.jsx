import { useParams } from 'react-router-dom';
//
import { Loader } from 'components';
import { getMovieCastById } from 'helpers/api';
import { useHttp } from 'hooks/useHttp';
import {
  CastImg,
  CastList,
  CastListItem,
  CastText,
  CastTitle,
  TextContainer,
} from './Cast.styled';
import defaultCastImg from 'images/oscar-award.jpg';

const Cast = () => {
  const { id } = useParams();
  const { data: actors, error, isLoading } = useHttp(getMovieCastById, id);

  if (!actors)
    return (
      <>
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
      </>
    );

  return (
    <CastList>
      {actors.map(({ id, profile_path, name, character }) => (
        <CastListItem key={id}>
          <CastImg
            src={`${
              profile_path
                ? `  https://image.tmdb.org/t/p/w342${profile_path}`
                : defaultCastImg
            }`}
            alt={name}
          />
          <TextContainer>
            <CastTitle>{name}</CastTitle>
            <CastText>Character: {character}</CastText>
          </TextContainer>
        </CastListItem>
      ))}
    </CastList>
  );
};
export default Cast;
