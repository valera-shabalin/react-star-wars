import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <p>Star Wars</p>
                </div>
                <div className="header__nav">
                    <NavLink exact to="/" activeClass="active">Home</NavLink>
                    <NavLink to="/catalog" activeClass="active">Catalog</NavLink>
                    <NavLink to="/about" activeClass="active">About</NavLink>
                    <NavLink to="/contact" activeClass="active">Contact</NavLink>
                </div>
            </header>
        );
    }
}