import React from "react";

import Catalog from "../components/Catalog/Catalog";

export default class CatalogPage extends React.Component {
    render() {
        return (
            <div className="catalog-page">
                <h1>Catalog page</h1>
                <Catalog/>
            </div>
        );
    }
}