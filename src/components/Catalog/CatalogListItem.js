import React from "react";
//import PropTypes from "prop-types";

import img from "../../assets/img/1.jpg";

import BaseButton from "../Base/BaseButton";
import BaseButtonIcon from "../Base/BaseButtonIcon";

class CatalogListItem extends React.Component {
    render() {
        return (
            <div className="catalog__item">
                <div className="catalog__item-avatar">
                    <img src={img} alt="img"/>
                </div>
                <p className="catalog__item-title">Luke Skywalker</p>
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

/*CatalogListItem.propTypes = {

};*/

export default CatalogListItem;