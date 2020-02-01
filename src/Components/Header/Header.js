import React, { Component } from 'react';
import { StyledHeader, StyledHeaderLink } from './Header.styled';


export default class Header extends Component{
    render() {
        return (
            <StyledHeader>
                <StyledHeaderLink logo='true' exact='true' to="/">Swapi UI</StyledHeaderLink>
                <StyledHeaderLink to="/people">People</StyledHeaderLink>
                <StyledHeaderLink to="/planets">Planets</StyledHeaderLink>
                <StyledHeaderLink to="/starships">Starships</StyledHeaderLink>
            </StyledHeader>
        )
    }
}