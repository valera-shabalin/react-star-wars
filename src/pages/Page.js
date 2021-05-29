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
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route exact path="/catalog" component={CatalogPage}/>
                        <Route path="/catalog/:id(\d+)" component={PersonPage}/>
                        <Route path="/contact" component={ContactPage}/>
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </div>
            </main>
        );
    }
}