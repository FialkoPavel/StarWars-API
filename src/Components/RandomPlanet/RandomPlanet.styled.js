import styled from "styled-components";

const StyledRandomPlanet = styled.div`
  background: rgb(162, 179, 195, .1);
  height: 340px;
  border-radius: 10px;
  margin-top: 30px;
  display: flex;
  position:relative;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 272px;
  justify-content: space-around;
  width: 100%;
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

const StyledImg = styled.img`
  border-radius: 10px;
  margin-left: 40px;
  width: 270px;
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

const StyledListItem = styled.li`
  list-style: none;
  font-size: ${({ planetName }) => planetName ? '58px' : '25px'};
  line-height: ${({ planetName }) => !planetName ? '46px' : null};
  &:nth-child(5) {
    margin-top: 89px;
  }
`;

const StyledItemKey = styled.span`
  opacity: .6;
  margin-right: 5px;
`;

export { StyledRandomPlanet, StyledList, StyledListItem, StyledImg, StyledItemKey }