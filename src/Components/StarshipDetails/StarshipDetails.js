import React from 'react';
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { StyledDetails, StyledDetailsImg, StyledDetailsList,
    StyledDetailsListItem, StyledName } from '../PeopleDetails/PeopleDetails.styled';
import { StyledItemKey } from '../RandomPlanet/RandomPlanet.styled';
import Spinner from "../Spinner";


const StarshipDetails = ({data, isBroken}) => {
    if (data.people !== null && !data.pending) {

        const {starships: {name, model, manufacturer, cost, length, maxSpeed, crew, passengers, id}, broken} = data;
        const serverImage =
            <StyledDetailsImg
                onError={() => isBroken()}
                src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>;
        const brokenImg = broken ? <ErrorMessage details/> : serverImage;

        return (
            <StyledDetails>
                <React.Fragment>
                    <StyledName>{name}</StyledName>
                    {brokenImg}
                    <StyledDetailsList>
                        <StyledDetailsListItem><StyledItemKey>Model: </StyledItemKey>{model}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Manufacturer: </StyledItemKey>{manufacturer}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Cost: </StyledItemKey>{cost}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Length: </StyledItemKey>{length}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Max Speed: </StyledItemKey>{maxSpeed}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Crew: </StyledItemKey>{crew}</StyledDetailsListItem>
                        <StyledDetailsListItem><StyledItemKey>Passengers: </StyledItemKey>{passengers}</StyledDetailsListItem>
                    </StyledDetailsList>
                </React.Fragment>
            </StyledDetails>
        )

    } else {
        const viewMessage = data.error ? <ErrorMessage/> : <Spinner/>;
        return (
            <StyledDetails starships>
                {viewMessage}
            </StyledDetails>
        )
    }
};


export default StarshipDetails;