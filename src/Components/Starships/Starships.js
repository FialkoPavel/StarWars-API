import React, { Component } from 'react';
import SwapiService from "../../Service";
import { StyledList, StyledListItem } from '../PeopleList/PeopleList.styled';
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

export default class Starships extends Component {

    swapi = new SwapiService();

    componentDidMount() {
        this.getItem();
        this.props.getStarship()
    }

    state = {
        item: null
    };

    getItem()  {
        const { getData } = this.props;
        getData()
            .then(item => {
                item.length = 9;
                this.setState({ item: item })
            })
    };


    render() {
        const { item } = this.state;
        const { getStarship, isError } = this.props;
        const person = item !== null ?
            item.map(el => <StyledListItem
                onClick={(e) => getStarship(e)}
                key={this.swapi.uniqueID(el.url)}
                id={this.swapi.uniqueID(el.url)}>{el.name}</StyledListItem>) :
            <Spinner />;

        const viewMessage = isError ? <ErrorMessage/> : person;

        return (
            <StyledList>
                {viewMessage}
            </StyledList>
        )
    }
}