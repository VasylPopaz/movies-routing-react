import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  color: white;
`;
export const StyledLinkMoviesList = styled(Link)`
  text-align: center;
`;
export const StyledListItem = styled.li`
  width: 185px;
  transition: all 300ms ease;
  &:hover,
  &:active {
    transform: scale(1.05);
  }
`;
export const StyledDescr = styled.p`
  margin-top: 5px;
  color: #3a444f;
`;
