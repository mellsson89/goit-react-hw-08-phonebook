import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {register} from '../../redux/auth/auth-operations';
import {Button} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import style from '../styles/views.module.scss';


export default function RegisterPage(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const dispatch=useDispatch();



  const handleChange=(e) => {
      const {name,value} = e.currentTarget;

      switch (name) {
          case 'name':
              setName(value)
              return;
          case 'email':
              setEmail(value)
              return;
          case 'password':
              setPassword(value)
              return;
          default:return;
      }

    }

   const handleSubmit=e=> {
        e.preventDefault();
        dispatch(register({name,email,password}))
       resetForm();
    }

   const resetForm=() => {
       setName('');
       setEmail('');
       setPassword('');
    }

    return(
         <form onSubmit={handleSubmit} className={style.loginForm}>

                    <span className={style.registered}>
                        <TextField id="name" label="Name" variant="outlined" size='small'
                                   type="text"
                                   name="name"
                                   value={name}
                                   onChange={handleChange}
                                   required
                        />
                    </span>

            <span className={style.registered}>
                    <TextField id="email" label="E-mail" variant="outlined" size='small'
                               type="email"
                               name="email"
                               value={email}
                               onChange={handleChange}
                               required

                    />

                </span>
            <span className={style.registered}>
                    <TextField id="password" label="Password" variant="outlined" size='small'
                               type="password"
                               name="password"
                               value={password}
                               onChange={handleChange}
                               required

                    />
                </span>
            <Button variant="contained" color="primary" type='submit'>Registered</Button>
        </form>
    )
}
