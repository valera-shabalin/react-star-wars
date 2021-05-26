import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class BaseButtonIcon extends React.Component {
    render() {
        return (
            <a href="#" className="base-button">
                <FontAwesomeIcon icon={[this.props.iconStyle, this.props.iconName]}/>
            </a>
        );
    }
}

BaseButtonIcon.propTypes = {
    iconStyle: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
};

export default BaseButtonIcon;