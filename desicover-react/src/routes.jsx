import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Lazy imports here
const App = lazy(() => import("./App"));
const Listing = lazy(() => import("./pages/listing"));

// Array of routes
const routes = [
    <Switch>
        <Route path="/" exact component={App} key="app" />,
        <Route path="/" exact component={Listing} key="app" />,
    </Switch>,
];

export default routes;
