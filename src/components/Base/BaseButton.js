import React from "react";
import PropTypes from "prop-types";

class BaseButton extends React.Component {
    render() {
        return (
            <a href="#" className="base-button">
                {this.props.title}
            </a>
        );
    }
}

BaseButton.propTypes = {
    title: PropTypes.string.isRequired
};

export default BaseButton;