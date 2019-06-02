import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
} from './types';
import axios from 'axios';

const addContact = (contact) => async (dispatch) => {
    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, contact);
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};

const deleteContact = (id) => async (dispatch) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (error) {
        console.log(`This is a mocked version of the backend`);
    }
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

const getContacts = () => async (dispatch) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export {
    addContact,
    deleteContact,
    getContacts,
};
