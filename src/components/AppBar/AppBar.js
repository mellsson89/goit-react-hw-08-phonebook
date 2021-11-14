import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import AuthNav from "../AuthNav/AuthNav";
import style from './styles/appbar.module.scss'
import UserMenu from "../UserMenu";
import {getIsAuthenticated} from "../../redux/auth/auth-selectors";
import {useSelector} from "react-redux";


export default function AppBar() {
    const isAuthenticated=useSelector(state =>getIsAuthenticated(state) )
   return (
           <header className={style.header}>
               <MainMenu />
               {isAuthenticated ? <UserMenu />:<AuthNav />}
           </header>
       )

}

