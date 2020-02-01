import React from 'react';
import { StyledSpinnerWrapper, StyledSpinnerRingsWrapper, StyledSpinnerRings } from './Spinner.styled';

const Spinner = (peopleList) => {
  return (
    <StyledSpinnerWrapper peopleList={peopleList} >
      <StyledSpinnerRingsWrapper>
        <StyledSpinnerRings></StyledSpinnerRings>
        <StyledSpinnerRings></StyledSpinnerRings>
      </StyledSpinnerRingsWrapper>
    </StyledSpinnerWrapper>
  );
};

export default Spinner;
