import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

import './assets/js/fontawesome';

import "bootstrap/dist/css/bootstrap-grid.min.css";
import "./index.css";
import "./index-media.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
