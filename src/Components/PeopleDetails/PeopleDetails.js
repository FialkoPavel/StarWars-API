import React from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { StyledDetails, StyledDetailsImg, StyledDetailsList, StyledDetailsListItem, StyledName } from './PeopleDetails.styled';
import { StyledItemKey } from '../RandomPlanet/RandomPlanet.styled';
import Spinner from "../Spinner";


const PeopleDetails = ({data, isBroken}) => {
    if (data.people !== null && !data.pending) {

        const {people: {name, height, mass, hairColor, skinColor, eyeColor, birthYear, gender, id}, broken} = data;
        const serverImage =
            <StyledDetailsImg
                onError={() => isBroken()}
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>;
        const brokenImg = broken ? <ErrorMessage details/> : serverImage;

        return (
            <StyledDetails>
                <React.Fragment>
                    <StyledName>{name}</StyledName>
                    {brokenImg}
                    <StyledDetailsList>
                        <StyledDetailsListItem><StyledItemKey>Height: </StyledItemKey>{height}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Mass: </StyledItemKey>{mass}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Hair color: </StyledItemKey>{hairColor}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Skin color: </StyledItemKey>{skinColor}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Eye color: </StyledItemKey>{eyeColor}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Birth year: </StyledItemKey>{birthYear}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Gender: </StyledItemKey>{gender}</StyledDetailsListItem>
                    </StyledDetailsList>
                </React.Fragment>
            </StyledDetails>
        )

    } else {
        const viewMessage = data.error ? <ErrorMessage/> : <Spinner/>;
        return (
            <StyledDetails>
                {viewMessage}
            </StyledDetails>
            )
    }
};


export default PeopleDetails;