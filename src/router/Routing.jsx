import React from 'react'
import { Switch, Route } from 'react-router-dom';
// import ProtectedRoute from '../system/router/PrivateRoute'
import Login from "../pages/Login/Login";

const Routing = ({location}) => {
    return(
        <>
            <Switch>
                <Route path="/">
                    <Route path="/login" component={Login} />
                </Route>
            </Switch>
        </>

    )
}

export default Routing;