import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  border-bottom: 1px solid lightgray;
`;
export const InfoWrapper = styled.div`
  padding: 10px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid lightgray;
`;
export const AdditionalInfowrapper = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
`;
export const AdditionalInfoTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 22px;
`;
export const AdditionalInfoList = styled.ul`
  padding-left: 20px;
  list-style-type: disc;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 18px;
  font-weight: 600;
`;
