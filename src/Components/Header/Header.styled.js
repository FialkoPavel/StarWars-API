import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  align-items: center;
  padding-top: 20px;
`;

const StyledHeaderLink = styled(Link)`
  text-decoration: none;
  color: ${({ logo }) => logo ? 'lightgray' : 'deepskyblue'};
  font-size: ${({ logo }) => logo ? '55px' : null};
`;

export { StyledHeader, StyledHeaderLink }