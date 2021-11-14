import React from "react";
import {getIsAuthenticated} from "../../redux/auth/auth-selectors";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from "react-redux";
import style from "./styles/menu.module.scss";



export default function MainMenu () {
    const isAuthenticated=useSelector(state => getIsAuthenticated(state));

    return (
        <div className={style.menuMain}>
            <NavLink exact to="/" className={style.menuMainLink} activeClassName={style.menuLink_active}>Home</NavLink>
                {isAuthenticated && <NavLink  exact className={style.menuMainLink} activeClassName={style.menuLink_active} to='/contacts'>
                   Contacts </NavLink>}

        </div>

    )
}

