import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
} from './types';

const addContact = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact
    };
};

const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    };
};

const getContacts = () => {
    return {
        type: GET_CONTACTS
    };
};

export {
    addContact,
    deleteContact,
    getContacts,
};
