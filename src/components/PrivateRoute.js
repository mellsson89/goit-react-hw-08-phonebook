import React from "react";
import {Route,Redirect} from "react-router-dom";
import {getIsAuthenticated} from "../redux/auth/auth-selectors";
import {useSelector} from "react-redux";


export default function PrivateRoute ({
    component:Component,
    redirectTo,
    ...routerProps
}) {
    const isAuthenticated=useSelector(state => getIsAuthenticated(state))
    return (
        <Route
            {...routerProps}
            render={props => isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo}/> }
        />
    )

}
