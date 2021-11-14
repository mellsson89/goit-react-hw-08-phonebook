import axios from "axios";
import {addContactRequest,addContactSuccess,addContactError,deleteContactRequest,deleteContactSuccess,
    deleteContactError,fetchContactsRequest,fetchContactsSuccess,fetchContactsError} from './contacts-actions'



export const fetchContact=()=> dispatch => {
    dispatch(fetchContactsRequest());
    axios.get('/contacts').then(({data}) => dispatch(fetchContactsSuccess(data))).catch(error => dispatch(fetchContactsError(error.message)))
}

export const addContact=(value)=> dispatch => {
    dispatch(addContactRequest());
    axios.post('/contacts',value).then(({data}) =>dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)))
}

export const deleteContact= contactId => dispatch => {
    dispatch(deleteContactRequest());
    axios.delete(`/contacts/${contactId}`).then(()=> dispatch(deleteContactSuccess(contactId))).catch(error => dispatch(deleteContactError(error.message)))
}


