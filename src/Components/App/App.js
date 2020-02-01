import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeopleList from "../PeopleList";
import PeopleDetails from '../PeopleDetails';
import PlanetList from "../PlanetList";
import PlanetDetails from "../PlanetDetails";
import Starships from "../Starships";
import SwapiService from "../../Service";
import StarshipDetails from "../StarshipDetails/StarshipDetails";

import { StyledApp, StyledRow } from './App.styled'


export default class App extends Component {

    swapi = new SwapiService();

    state = {
        people: {},
        planet: {},
        starships: {},
        error: false,
        broken: false,
        pending: true
    };


    getPerson(e, pending) {
        this.setState({ pending: true });

        const id = e !== undefined ? +e.target.getAttribute('id') : 1;

        this.swapi.getPerson(id).then(person => {
            this.setState({
                people: {
                    id: id,
                    name: person.name,
                    height: person.height,
                    mass: person.mass,
                    hairColor: person.hair_color,
                    skinColor: person.skin_color,
                    eyeColor: person.eye_color,
                    birthYear: person.birth_year,
                    gender: person.gender
                },
                pending: pending
            })
        }).catch(this.getError)
    };

    getPlanet(e, pending) {
        this.setState({ pending: true });
        const id = e !== undefined ? +e.target.getAttribute('id') : 2;

            this.swapi.getPlanet(id).then(planet => {
                this.setState({
                    planet: {
                        id: id,
                        planetName: planet.name,
                        population: planet.population,
                        rotationPeriod: planet.rotation_period,
                        diameter: planet.diameter,
                        orbitalPeriod: planet.orbital_period,
                        climate: planet.climate,
                        gravity: planet.gravity,
                        terrain: planet.terrain
                    },
                    pending: pending
                })
            }).catch(this.getError)
    };

    getStarship(e, pending) {
        this.setState({ pending: true });
        const id = e !== undefined ? +e.target.getAttribute('id') : 5;

        this.swapi.getStarship(id).then(starship => {
            this.setState({
                starships: {
                    id: id,
                    name: starship.name,
                    model: starship.model,
                    manufacturer: starship.manufacturer,
                    cost: starship.cost_in_credits,
                    length: starship.length,
                    maxSpeed: starship.max_atmosphering_speed,
                    crew: starship.crew,
                    passengers: starship.passengers
                },
                pending: pending
            })
        }).catch(this.getError)
    }

    getError = () => {
        this.setState({
            error: true,
            pending: false
        })
    };

    isBroken() {
        this.setState({
            broken: true
        })
    };

    render() {

        return (
            <StyledApp>
                <Router>
                    <Header/>
                    <RandomPlanet/>
                    <Route path='/people'>
                        <StyledRow>
                            <PeopleList
                                getPerson={(e, pending) => this.getPerson(e, false)}
                                getData={this.swapi.getAllPeople}
                                isError={this.state.error}/>
                            <PeopleDetails isBroken={() => this.isBroken()} data={this.state}/>
                        </StyledRow>
                    </Route>
                    <Route path='/planets'>
                        <StyledRow>
                            <PlanetList
                                getPlanet={(e, pending) => this.getPlanet(e, false)}
                                getData={this.swapi.getAllPlanets}
                                isError={this.state.error}/>
                            <PlanetDetails isBroken={() => this.isBroken()} data={this.state}/>
                        </StyledRow>
                    </Route>
                    <Route path='/starships'>
                        <StyledRow>
                            <Starships
                                getStarship={(e, pending) => this.getStarship(e, false)}
                                getData={this.swapi.getAllStarships}
                                isError={this.state.error}/>
                            <StarshipDetails isBroken={() => this.isBroken()} data={this.state}/>
                        </StyledRow>
                    </Route>
                </Router>
            </StyledApp>
        )
    }
}