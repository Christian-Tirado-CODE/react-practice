import React, { Fragment } from 'react';
import {Route} from "react-router-dom";
const Welcome = () => {
    return (
        <Fragment>
        <h1>The Welcome page!</h1>
        <Route path="/welcome/new-user">
         <p>Welcome, new user!</p>
        </Route>
        </Fragment>
    );
};

export default Welcome;