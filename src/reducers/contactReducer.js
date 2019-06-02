import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACTS,
} from '../actions/types'

const initialState = { 
    contacts: []
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT: {
           return {
               ...state,
               contacts: [action.payload, ...state.contacts]
           }
        }
        case DELETE_CONTACT: {
            return {
                ...state,
                contacts: state.contacts.filter(contact => 
                    contact.id !== action.payload)
            }
        }
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        default: 
            return state;
    }
}