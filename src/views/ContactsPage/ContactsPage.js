import React,{useState,useEffect} from "react";
import Filter from "../../components/Filter";
import ContactForm from "../../components/ContactForm";
import ContactList from "../../components/ContactList";
import {fetchContact} from '../../redux/contacts/contacts-operations'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import Modal from "../../components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {loadingContacts,errorMessenger} from '../../redux/contacts/contacts-selectors';
import Icon from '@material-ui/core/Icon';
import {Button} from "@material-ui/core";
import style from '../styles/views.module.scss'



export default function App () {

    const [showModal,setShowModal]=useState(false);


    const dispatch=useDispatch();

    const error=useSelector(state=> errorMessenger(state));
    const loading=useSelector(state => loadingContacts(state))

    useEffect(()=> {
        dispatch(fetchContact())
    },[dispatch])


    const toggleModal =() => {
        setShowModal(!showModal)
    }

        return (
            <div className={style.contacts_container}>
                <Button
                    variant="contained"
                    color="primary"  type='button' endIcon={<Icon>send</Icon>}   onClick={toggleModal}>Add contacts</Button>
                <h1>Phonebook</h1>
                <h2>Contacts</h2>
                <Filter/>
                <ContactList/>
                {showModal && <Modal onClose={toggleModal}><ContactForm onSave={toggleModal}/></Modal>}
                {error && <p color="red">Error!!!!</p>}
                { loading &&  <Loader type="Watch" color="#00BFFF" height={60} width={60} timeout={3000}  />}
            </div>
        )

}

