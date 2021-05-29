import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class CatalogListItem extends React.Component {
    render() {
        const person = this.props.person;

        return (
            <div className="catalog__item">
                <div className="catalog__item-avatar">
                    <img src={ person.image } alt="img"/>
                </div>
                <p className="catalog__item-title">{ person.name }</p>
                <div className="catalog__item-button-wrapper">
                    <NavLink className="base-button" to={`/catalog/${person.id}`}>View</NavLink>
                </div>
            </div>
        );
    }
}

CatalogListItem.propTypes = {
    person: PropTypes.object.isRequired
};

export default CatalogListItem;