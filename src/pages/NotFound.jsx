import { StyledLink, StyledTitle } from 'components';

const NotFound = () => {
  return (
    <div>
      <StyledLink to="/">Go home...</StyledLink>
      <StyledTitle>Sorry... Page is not found!</StyledTitle>
    </div>
  );
};

export default NotFound;
