import React from "react";

import CatalogListItem from "./CatalogListItem";

export default class CatalogList extends React.Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.people.map((item, index) => {
                        return (
                            <div className="col-lg-3 col-md-4" key={index}>
                                <CatalogListItem data={item}/>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}