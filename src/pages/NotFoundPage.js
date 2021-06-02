import React from "react";

export default function AboutPage(props) {
    return (
        <div className="about-page">
            <h1>404. Not found.</h1>
            <p>Oops! This page isn't found.</p>
            <button onClick={() => props.history.goBack()}>Go back</button>
        </div>
    );
}