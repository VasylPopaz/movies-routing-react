import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;
export const SearchInput = styled.input`
  padding: 4px;
  width: 220px;
  font-size: 16px;
`;
export const SearchButton = styled.button`
  width: 100px;
  padding: 8px;
  border-radius: 10px;
  background-color: #0e449c;
  color: #fff;
  transition: all 300ms ease;
  &:hover {
    transform: scale(1.05);
    background-color: #2545ba;
  }
`;
