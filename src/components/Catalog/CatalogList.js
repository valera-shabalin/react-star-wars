import React from "react";

import CatalogListItem from "./CatalogListItem";

export default class CatalogList extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
                <div className="col-lg-3 col-md-4">
                    <CatalogListItem/>
                </div>
            </div>
        );
    }
}