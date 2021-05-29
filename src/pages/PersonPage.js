import React from "react";

import Person from "../components/Person/Person";
import BaseLoader from "../components/Base/BaseLoader";

class PersonPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isNotFound: false,
            person: {}
        }
    }

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;

            const response = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`);
            const result = await response.json();

            this.setState({
                person: result || {},
                isLoaded: true
            })
        } catch(err) {
            this.setState({
                isNotFound: true
            })
        }
    }

    render() {
        if (this.state.isNotFound) {
            return <h1>Person not found.</h1>;
        } else {
            if (this.state.isLoaded) {
                return <Person person={this.state.person}/>;
            } else {
                return <BaseLoader/>;
            }
        }
    }
}

export default PersonPage;