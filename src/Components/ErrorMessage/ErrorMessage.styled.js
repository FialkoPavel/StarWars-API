import styled from "styled-components";

const StyledError = styled.div`
    display: inline-block;
    position: ${({ broken }) => broken ? 'relative' : 'absolute'};
    top: ${({ broken }) => broken ? '40%' : '50%'};
    left: ${({ broken }) => broken ? '14%' : '50%'};
    transform: translate(-50%, -50%);
    width: ${({ broken }) => broken ? '36%' : null};
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

const StyledErrorImg = styled.img`
  width: 150px;
  display: block;
  margin: 0 auto;
`;

const StyledErrorText = styled.h1`
  font-size: 2em;
  text-align: center;
`;


export { StyledError, StyledErrorImg, StyledErrorText }