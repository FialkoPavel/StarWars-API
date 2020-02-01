import React, { PureComponent } from 'react';
import SwapiService from "../../Service";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Spinner from "../Spinner";
import { StyledRandomPlanet, StyledList, StyledListItem, StyledImg, StyledItemKey } from './RandomPlanet.styled';

export default class RandomPlanet extends PureComponent {

    intervalID = 0;

    componentDidMount() {
        this.intervalID = setInterval(this.getUpdatePlanet, 4000);
    }

    componentWillUnmount() {
        console.log('Unmounted');
        clearInterval(this.intervalID);
    }

    state = {
        planet: {
            id: null,
            planetName: null,
            population: null,
            rotationPeriod: null,
            diameter: null,
            orbitalPeriod: null,
            climate: null,
            surfaceWater: null
        },
        loading: true,
        error: false,
        broken: false
    };

    swapi = new SwapiService();

    getUpdatePlanet = () => {
        const randomID = Math.round(Math.random()*20 + 1);

        this.swapi.getPlanet(randomID)
            .then((res) => {

                this.setState({
                    planet: {
                        id: randomID,
                        planetName: res.name,
                        population: res.population,
                        rotationPeriod: res.rotation_period,
                        diameter: res.diameter,
                        orbitalPeriod: res.orbital_period,
                        climate: res.climate,
                        surfaceWater: res.surface_water
                    },
                    loading: false,
                    broken: false
                })
            })
            .catch(this.getError)
    };

    getError = () => {
        this.setState({
            error: true,
            loading: false
        })
    };

    isBroken = () => {
        this.setState({
            broken: true
        })
    };

    render() {

        const { planet: { planetName, population, rotationPeriod, diameter, id,
            orbitalPeriod, climate, surfaceWater }, loading, error, broken } = this.state;

        const planetsData = [
            {label: 'Population: ', value: population},
            {label: 'Rotation Period: ', value: rotationPeriod},
            {label: 'Diameter: ', value: diameter},
            {label: 'Orbital Period: ', value: orbitalPeriod},
            {label: 'Climate: ', value: climate},
            {label: 'Surface Water: ', value: surfaceWater}
        ];

        const elements = planetsData.map((el, i) => {
            return <StyledListItem key={i}><StyledItemKey>{ el.label }</StyledItemKey>{ el.value }</StyledListItem>
        });

        const ViewPlanet = () => {
            return (
                <React.Fragment>
                    {isBroken}
                    <StyledList>
                        <StyledListItem planetName>{ planetName }</StyledListItem>
                        {elements}
                    </StyledList>
                </React.Fragment>
            )
        };

        const imageBlock = <StyledImg onError={this.isBroken} src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet"/>;

        const isLoading = loading ? <Spinner/> : <ViewPlanet/>;
        const viewMessage = (error && !loading) ? <ErrorMessage/> : isLoading;
        const isBroken = broken ? <ErrorMessage/> : imageBlock;

        return (
            <StyledRandomPlanet>
                {viewMessage}
            </StyledRandomPlanet>
        )
    }
}