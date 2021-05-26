import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import CatalogPage from "./CatalogPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import PersonPage from "./PersonPage";
import NotFoundPage from "./NotFoundPage";

export default class Page extends React.Component {
    render() {
        return (
            <main>
                <div className="container">
                    <Switch>
                        <Route exact={true} path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/about">
                            <AboutPage/>
                        </Route>
                        <Route path="/catalog">
                            <CatalogPage/>
                        </Route>
                        <Route path="/contact">
                            <ContactPage/>
                        </Route>
                        <Route path="/person/:id">
                            <PersonPage/>
                        </Route>
                        <Route>
                            <NotFoundPage/>
                        </Route>
                    </Switch>
                </div>
            </main>
        );
    }
}