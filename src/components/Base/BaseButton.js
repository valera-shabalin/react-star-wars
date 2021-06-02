import React from "react";

class BaseButton extends React.Component {
    handleClick(event) {
        event.preventDefault();
        alert('Hi!');
    }

    render() {
        return (
            <a
                className="base-button"
                onClick={() => this.handleClick}
            >
                {this.props.children}
            </a>
        );
    }
}

export default BaseButton;