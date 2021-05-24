import React from "react";

import Page from "./pages/Page";
import Header from "./components/Header";

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Page />
            </div>
        );
    }
}
