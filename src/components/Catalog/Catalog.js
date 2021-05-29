import React from "react";

import CatalogList from "./CatalogList";
import BaseLoader from "../Base/BaseLoader";

export default class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            searchContent: '',
            people: []
        }

        this.handleChange = event => this.setState({ searchContent: event.target.value })
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://akabab.github.io/starwars-api/api/all.json');
            const result = await response.json();

            this.setState({
                isLoaded: true,
                people: result
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        let catalogList;

        if (this.state.isLoaded) {
            catalogList = <CatalogList
                people={this.state.people.filter(item => item.name.toLowerCase().includes(this.state.searchContent))}
            />;
        } else {
            catalogList = <BaseLoader/>;
        }

        return (
            <div className="catalog">
                <div className="catalog__header">
                    <input
                        type="text"
                        className="catalog__search"
                        placeholder="Начните вводить имя персонажа"
                        value={this.state.searchContent}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="catalog__body">
                    {catalogList}
                </div>
            </div>
        );
    }
}