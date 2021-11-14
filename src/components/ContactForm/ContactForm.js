import React,{useState} from "react";
import style from './styles/contactForm.module.scss';
import {addContact} from '../../redux/contacts/contacts-operations';
import {allContacts} from '../../redux/contacts/contacts-selectors';
import {Button} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import {useSelector,useDispatch} from "react-redux";


export default function ContactForm({onSave}){

    const [name,setName]=useState('');
    const [number,setNumber]=useState('');
    const contacts=useSelector(state => allContacts(state));
    const dispatch=useDispatch();



    const handleChange = (e) => {
        const {name,value}=e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                return;
            case 'number':
                setNumber(value)
                return;
            default:return;
        }
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        const contact = {
            name,
            number
        }

       const cloneName= contacts.find(({name}) => contact.name.toLowerCase() === name.toLowerCase())

        if(cloneName) {
            const {name}=cloneName;
            alert(`${name} is already in contacts`);
            return;
        }

        dispatch(addContact(contact))
        onSave();
        resetForm()

    }

    const resetForm =() => {
        setName('');
       setNumber('');
    }


    return (
        <form onSubmit={handleSubmit} className={style.form}>
<span className={style.formInput}>
        <TextField id="outlined-basic" label="Name" variant="outlined" size='small'
                   type="text"
                   name="name"
                   value={name}
                   onChange={handleChange}
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                   title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                   required

        />
</span>


            <span className={style.formInput}>
                <TextField id="outlined-basic" label="Number" variant="outlined" size='small'
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    className={style.formInput}
                />
            </span>
            <Button variant="contained" color="primary" type='submit'>Add contact</Button>
        </form>

    )

}

