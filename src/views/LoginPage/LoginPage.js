import React, { useState} from "react";
import {useDispatch} from "react-redux";
import style from "../styles/views.module.scss";
import {logIn} from '../../redux/auth/auth-operations';
import TextField from '@mui/material/TextField';
import {Button} from "@material-ui/core";


export default function ResetForm() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();

    const handleChange=(e) => {
        const {name,value} = e.currentTarget;

        switch (name) {
            case 'email':
                setEmail(value)
                return;
            case 'password':
                setPassword(value)
                return;
            default:return;
        }

    }

    const handleSubmit=(e) => {
        e.preventDefault();
        dispatch(logIn({email,password}))
      resetForm();
    }

    const resetForm=() => {
        setEmail('');
      setPassword('');
    }


    return (
        <form onSubmit={handleSubmit} className={style.loginForm}>

               <span className={style.loginFormInput}>
                   <TextField id="outlined-basic" label="E-mail" variant="outlined" size='small'
                              type="email"
                              name="email"
                              value={email}
                              onChange={handleChange}
                              required

                   /></span>
            <span className={style.loginFormInput}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" size='small'
                               type="password"
                               name="password"
                               value={password}
                               onChange={handleChange}
                               required
                    />
                </span>
            <Button variant="contained" color="primary" type='submit' className={style.loginFormButton}>Login</Button>
        </form>
    )
}

