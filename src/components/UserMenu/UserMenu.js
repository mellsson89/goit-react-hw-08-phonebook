import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../redux/auth/auth-operations";
import {getName} from "../../redux/auth/auth-selectors";
import {Button} from "@material-ui/core";
import style from './styles/userMenu.module.scss'


const UserMenu =({avatar}) => {

    const name=useSelector((state) =>getName(state));
    const dispatch=useDispatch();
    const onLogout=()=> dispatch(logOut());
    return (
        <div>
            <img src={avatar} alt='' width='32'/>
            <span className={style.name}>Welcome,{name}</span>
            <Button variant="contained" color="primary" size="small" type='button' onClick={onLogout}>Logout</Button>
        </div>
    )
}


export default UserMenu;