import React, {Component} from 'react';
import { StyledList, StyledListItem } from '../PeopleList/PeopleList.styled';
import SwapiService from "../../Service";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";

class PlanetList extends Component {

    swapi = new SwapiService();

    componentDidMount() {
        this.getItem();
        this.props.getPlanet()
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
        const { getPlanet, isError } = this.props;
        const planet = item !== null ?
            item.map(el => <StyledListItem
                onClick={(e) => getPlanet(e)}
                key={this.swapi.uniqueID(el.url)}
                id={this.swapi.uniqueID(el.url)}>{el.name}</StyledListItem>) :
            <Spinner poepleList/>;

        const viewMessage = isError ? <ErrorMessage/> : planet;

        return (
            <StyledList>
                {viewMessage}
            </StyledList>
        )
    }
}

export default PlanetList;