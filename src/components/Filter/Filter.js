import React from "react";
import style from './styles/filter.module.scss';
import {handleFilter} from '../../redux/contacts/contacts-actions';
import {filterContacts} from '../../redux/contacts/contacts-selectors';
import TextField from '@mui/material/TextField';
import {useDispatch, useSelector} from "react-redux";



export default function Filter () {

    const value=useSelector(state => filterContacts(state));
    const dispatch=useDispatch();
    const onChange=e => dispatch(handleFilter(e.currentTarget.value));

    return (

    <TextField label="Find contacts by name" variant="outlined" size='small' type='text' name='filter' value={value} onChange={onChange} className={style.filterInput}/>


    )
}

