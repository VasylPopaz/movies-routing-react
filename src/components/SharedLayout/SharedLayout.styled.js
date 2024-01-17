import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 30px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #0e449c;
`;
export const StyledNav = styled.nav`
  display: flex;
  gap: 10px;
  font-size: 22px;
`;
export const StyledNavLink = styled(NavLink)`
  transition: all 300ms ease;
  &:hover:not(.active) {
    transform: scale(1.05);
  }
  &.active {
    color: #e8e120;
  }
`;
