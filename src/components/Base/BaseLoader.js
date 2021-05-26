import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BaseLoader extends React.Component {
    render() {
        return (
            <div className="base-loader">
                <FontAwesomeIcon icon={['fas', 'spinner']} color={"#272B30"}/>
                <span>Загрузка</span>
            </div>
        );
    }
}