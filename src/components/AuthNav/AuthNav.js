import React from "react";
import {NavLink} from "react-router-dom";
import style from './styles/authnac.module.scss'

const AuthNav =() =>(

    <div className={style.menu}>
       <NavLink exact to="/registered"  className={style.menuLink} activeClassName={style.menuLink_active}>Register</NavLink>
        <NavLink  exact to="/login" className={style.menuLink} activeClassName={style.menuLink_active}>Login</NavLink>
    </div>
)

export default AuthNav;