import { getMovieCastById } from 'helpers/api';
import { useParams } from 'react-router-dom';
import { useHttp } from 'hooks/useHttp';
import {
  CastImg,
  CastList,
  CastListItem,
  CastText,
  CastTitle,
  TextContainer,
} from './Cast.styled';

const Cast = () => {
  const { id } = useParams();
  const { data: actors } = useHttp(getMovieCastById, id);
  if (!actors) return;

  return (
    <CastList>
      {actors.map(({ id, profile_path, name, character }) => (
        <CastListItem key={id}>
          <CastImg
            src={`${
              profile_path
                ? `http://image.tmdb.org/t/p/w185${profile_path}`
                : ''
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
