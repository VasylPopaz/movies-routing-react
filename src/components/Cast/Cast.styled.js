import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */
  justify-content: center;
  gap: 20px;
`;
export const CastListItem = styled.li`
  text-align: center;
  flex-basis: 205px;
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;
export const CastImg = styled.img`
  margin: 0 auto;
`;
export const TextContainer = styled.div`
  padding: 10px;
`;
export const CastTitle = styled.h3`
  max-width: 185px;
`;
export const CastText = styled.p`
  max-width: 185px;
`;
