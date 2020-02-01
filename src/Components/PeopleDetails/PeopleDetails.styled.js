import styled from "styled-components";

const StyledDetails = styled.div`
  width: 45%;
  min-height: 406px;
  border-radius: 10px;
  background: rgb(162, 179, 195, .1);
  margin-top: 40px;
  display: inline-block;
  box-sizing: border-box;
  position:relative;
  padding: 30px;
  animation: fade 1s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledDetailsImg = styled.img`
  width: 40%;
  border-radius: 5px;
`;

const StyledDetailsList = styled.ul`
  vertical-align: top;
  display: inline-block;
  font-size: 1.3em;
  margin: 0;
  width: 268px;
  padding-left: 20px;
  box-sizing: border-box;
`;

const StyledDetailsListItem = styled.li`
  list-style: none;
  line-height: 1.92;
`;

const StyledName = styled.h1`
  margin: 0 0 10px 0;
  width: 100%;
`;

export { StyledDetails, StyledDetailsImg, StyledDetailsList, StyledDetailsListItem, StyledName }