import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <p>Star Wars</p>
                </div>
                <div className="header__nav">
                    <Link to="/">Home</Link>
                    <Link to="/catalog">Catalog</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </header>
        );
    }
}