import React, { Component } from 'react';
import SwapiService from "../../Service";
import { StyledList, StyledListItem } from './PeopleList.styled';
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

export default class PeopleList extends Component {

    swapi = new SwapiService();

    componentDidMount() {
        this.getItem();
        this.props.getPerson()
    }

    state = {
        item: null
    };

    getItem()  {
        const { getData } = this.props;
        getData()
            .then(item => {
                item.length = 7;
                this.setState({ item: item })
            })
    };


    render() {

        const { item } = this.state;
        const { getPerson, isError } = this.props;
        const person = item !== null ?
                item.map(el => <StyledListItem
                    onClick={(e) => getPerson(e)}
                    key={this.swapi.uniqueID(el.url)}
                    id={this.swapi.uniqueID(el.url)}>{el.name}</StyledListItem>) :
                <Spinner poepleList/>;

        const viewMessage = isError ? <ErrorMessage/> : person;

        return (
            <StyledList>
                {viewMessage}
            </StyledList>
        )

    }
}