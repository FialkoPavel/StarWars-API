import styled from "styled-components";

const StyledList = styled.div`
  width: 45%;
  position: relative;
  margin-top: 40px;
  height: fit-content;
  background: rgb(162, 179, 195, .1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const StyledListItem = styled.span`
  padding: 10px 20px;
  border-bottom: 1px solid rgb(162, 179, 195);
  transition: .3s;
  font-size: 1.5em;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background: rgb(162, 179, 195, .3);
    color: white;
    cursor: pointer;
    &:first-of-type {
      border-radius: 10px 10px 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 10px 10px;
    }
  }
`;


export { StyledList, StyledListItem }