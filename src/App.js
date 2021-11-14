import React, {Suspense, lazy, useEffect} from "react";
import {useDispatch} from "react-redux";
import {Switch} from 'react-router-dom';
import AppBar from "./components/AppBar/AppBar";
import routes from "./routes/routes";
import {getCurrentUser} from "./redux/auth/auth-operations";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";



const HomePage=lazy(() => import('./views/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const ContactsPage=lazy(() => import('./views/ContactsPage/ContactsPage' /* webpackChunkName: "contact-page" */));
const RegisterPage=lazy(() => import('./views/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */));
const LoginPage=lazy(() => import('./views/LoginPage/LoginPage' /* webpackChunkName: "login-page" */));


export default function App() {

    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser())
    },[dispatch])


        return (
            <>
                <Suspense fallback={<p>Loading...</p>} >
                <AppBar />
                <Switch>
                    <PublicRoute exact path={routes.home}  component={HomePage} />
                    <PrivateRoute  path={routes.contacts} component={ContactsPage} redirectTo='/login' />
                    <PublicRoute  restricted redirectTo='/contacts' path={routes.register} component={RegisterPage} />
                    <PublicRoute  restricted  redirectTo='/contacts' path={routes.login} component={LoginPage} />
                </Switch>
                </Suspense>
            </>
        )
    }
