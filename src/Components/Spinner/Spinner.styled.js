import styled from "styled-components";

const StyledSpinnerWrapper = styled.div`
  margin: 0 auto;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledSpinnerRingsWrapper = styled.div`
  position: relative;
  width: 77px !important;
  height: 77px !important;
  -webkit-transform: translate(-38.5px, -38.5px) scale(0.385) translate(38.5px, 38.5px);
  transform: translate(-38.5px, -38.5px) scale(0.385) translate(38.5px, 38.5px);
`;

const StyledSpinnerRings = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  border: 8px solid #000;
  border-color: #3d7ec0 transparent #3d7ec0 transparent;
  -webkit-animation: lds-double-ring 1.5s linear infinite;
  animation: lds-double-ring 1.5s linear infinite;
  &:nth-child(2) {
    width: 140px;
    height: 140px;
    top: 30px;
    left: 30px;
    border-color: transparent #cc4545 transparent #cc4545;
    -webkit-animation: lds-double-ring_reverse 1.5s linear infinite;
    animation: lds-double-ring_reverse 1.5s linear infinite;
  }
  @keyframes lds-double-ring {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes lds-double-ring {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes lds-double-ring_reverse {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
  @-webkit-keyframes lds-double-ring_reverse {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(-360deg);
      transform: rotate(-360deg);
    }
  }
`;

export { StyledSpinnerWrapper, StyledSpinnerRingsWrapper, StyledSpinnerRings }


