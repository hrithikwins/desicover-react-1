import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

// Lazy imports here
const App = lazy(() => import("./App"));
const Listing = lazy(() => import("./pages/listing"));
const ProductDescription = lazy(() => import("./pages/product-description"));
const Profile = lazy(() => import("./pages/profile"));

// Array of routes
const routes = [
    <Switch>
        <Route path="/listing" exact component={Listing} key="app" />,
        <Route
            path="/product-description/:id"
            exact
            component={ProductDescription}
        />
        ,
        <Route path="/" exact component={App} key="app" />,
        <Route path="/profile" exact component={Profile} key="app" />,
    </Switch>,
];

export default routes;
