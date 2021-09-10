import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, auth, loading, ...rest }) => {
    if (auth) {
        return <Route {...rest} render={(props) => <Component {...props} />} />;
    }
    return <Route {...rest} render={(props) => <Redirect to="/" />} />;
};


export default withRouter((ProtectedRoute));
