import React from "react";
import {useSelector} from "react-redux";
import {Route,Redirect} from "react-router-dom";
import {getIsAuthenticated} from "../redux/auth/auth-selectors";



export default function  PublicRoute ({
                         component:Component,
                         redirectTo,
                         ...routerProps
                     })  {
    const isAuthenticated =useSelector(state => getIsAuthenticated(state))

    return (
        <Route
            {...routerProps}
            render={props => isAuthenticated && routerProps.restricted ?
                (<Redirect to={redirectTo} />) : (<Component {...props} /> )}
        />
    )
}
