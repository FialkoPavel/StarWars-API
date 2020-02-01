import React from 'react';
import { StyledError, StyledErrorImg, StyledErrorText } from './ErrorMessage.styled'
import icon from './ErrorImage.png'

const ErrorMessage = () => {
    return (
        <StyledError broken>
            <StyledErrorImg src={icon} alt='error'/>
            <StyledErrorText>Content Not Found</StyledErrorText>
        </StyledError>
    )
};

export default ErrorMessage