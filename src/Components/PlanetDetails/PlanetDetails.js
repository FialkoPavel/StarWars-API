import React from 'react';
import {
    StyledDetails,
    StyledDetailsImg,
    StyledDetailsList,
    StyledDetailsListItem,
    StyledName
} from "../PeopleDetails/PeopleDetails.styled";
import ErrorMessage from "../ErrorMessage";
import { StyledItemKey } from "../RandomPlanet/RandomPlanet.styled";
import Spinner from "../Spinner";

const PlanetDetails = ({ data, isBroken }) => {
    if (data.planet !== null && !data.pending) {
        const {
            planet: {
                planetName, population, rotationPeriod,
                diameter, orbitalPeriod, climate, gravity, id
            }, broken
        } = data;

        const serverImage =
            <StyledDetailsImg
                planet
                onError={() => isBroken()}
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>;
        const brokenImg = broken ? <ErrorMessage details/> : serverImage;

        const planetsData = [
            {label: 'Population: ', value: population},
            {label: 'Rotation Period: ', value: rotationPeriod},
            {label: 'Diameter: ', value: diameter},
            {label: 'Orbital Period: ', value: orbitalPeriod},
            {label: 'Climate: ', value: climate},
            {label: 'Gravity: ', value: gravity}
        ];

        const elements = planetsData.map((el, i) => {
            return <StyledDetailsListItem key={i}><StyledItemKey>{el.label}</StyledItemKey>{el.value}
            </StyledDetailsListItem>
        });

        return (
            <StyledDetails>
                <React.Fragment>
                    <StyledName>{planetName}</StyledName>
                    {brokenImg}
                    <StyledDetailsList>
                        {elements}
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

export default PlanetDetails;