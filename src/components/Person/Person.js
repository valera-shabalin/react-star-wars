import React from "react";
import PropTypes from "prop-types";

function Person({ person }) {
    return (
        <div className="person-page">
            <div className="person">
                <div className="person__avatar">
                    <img src={person.image} alt={person.name}/>
                </div>
                <h1>{person.name}</h1>
                <ul className="person__info">
                    <li>Gender: { person.gender }</li>
                    <li>Height: { person.height }</li>
                    <li>Mass: { person.mass }</li>
                </ul>
            </div>
        </div>
    );
}

Person.propTypes = {
    person: PropTypes.object.isRequired
}

export default Person;