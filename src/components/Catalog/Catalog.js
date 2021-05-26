import React from "react";

import CatalogList from "./CatalogList";
import BaseLoader from "../Base/BaseLoader";

export default class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            people: []
        }
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
        return (
            <div className="catalog">
                <div className="catalog__header">
                    <input type="text" className="catalog__search" placeholder="Начните вводить имя персонажа"/>
                </div>
                <div className="catalog__body">
                    {/*<CatalogList people={ this.state.people.filter(item => item.name === "Luke Skywalker") } />*/}
                    {
                        this.state.isLoaded ? <CatalogList people={ this.state.people } /> : <BaseLoader/>
                    }
                </div>
            </div>
        );
    }
}