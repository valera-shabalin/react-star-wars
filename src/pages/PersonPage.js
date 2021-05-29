import React from "react";
import { PropTypes } from "prop-types";

class PersonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }

    async componentDidMount() {
        const id = this.props.match.params.id;

        const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`);
        const result = await response.json();

        this.setState({
            person: result || {}
        })
    }

    render() {
        const person = this.state.person;

        return (
            <h1>{person.name}</h1>
        );
    }
}

PersonPage.propTypes = {
    person: PropTypes.object.isRequired
}

export default PersonPage;