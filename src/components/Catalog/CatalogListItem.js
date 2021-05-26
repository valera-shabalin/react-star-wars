import React from "react";
import PropTypes from "prop-types";

import BaseButton from "../Base/BaseButton";
import BaseButtonIcon from "../Base/BaseButtonIcon";

class CatalogListItem extends React.Component {
    render() {
        return (
            <div className="catalog__item">
                <div className="catalog__item-avatar">
                    <img src={ this.props.data.image } alt="img"/>
                </div>
                <p className="catalog__item-title">{ this.props.data.name }</p>
                <div className="catalog__item-button-wrapper">
                    <BaseButton title={"Перейти"}/>
                    <BaseButtonIcon
                        iconName={"bookmark"}
                        iconStyle={"far"}
                    />
                </div>
            </div>
        );
    }
}

CatalogListItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default CatalogListItem;