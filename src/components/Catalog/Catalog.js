import React from "react";

import CatalogList from "./CatalogList";

export default class Catalog extends React.Component {
    render() {
        return (
            <div className="catalog">
                <div className="catalog__header">
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className="catalog__search" placeholder="Начните вводить имя персонажа"/>
                        </div>
                    </div>
                </div>
                <div className="catalog__body">
                    <CatalogList/>
                </div>
            </div>
        );
    }
}