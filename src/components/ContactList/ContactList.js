import React from "react";
import style from './styles/contactList.module.scss'
import {deleteContact} from '../../redux/contacts/contacts-operations';
import {getVisibleContacts} from '../../redux/contacts/contacts-selectors';
import {Button} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useSelector,useDispatch} from "react-redux";


export default function ContactList ()   {
    const contacts=useSelector(state => getVisibleContacts(state))
    const dispatch=useDispatch();
    const onDelete = id => dispatch(deleteContact(id))
    return (
        <ul>
            {contacts.map(({id,name,number})=> (

                <li key={id} className={style.contactList_item}>{name}: {number} <Button
                    variant="contained"
                    color="secondary" startIcon={<DeleteIcon />} size="small"  onClick={() => onDelete(id)}>Delete</Button></li>

            ))}
        </ul>
    )
}

