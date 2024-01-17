import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: underline;
  transition: all 300ms ease;
  &:hover {
    color: #532adb;
  }
`;
