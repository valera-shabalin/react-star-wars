import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header__logo">
                    <NavLink exact to="/">Star Wars</NavLink>
                </div>
                <div className="header__nav">
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink to="/catalog" activeClassName="active">Catalog</NavLink>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </div>
            </header>
        );
    }
}