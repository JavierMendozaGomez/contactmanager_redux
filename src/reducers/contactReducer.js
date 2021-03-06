import {
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT,
    GET_CONTACTS,
    UPDATE_CONTACT
} from '../actions/types'

const initialState = { 
    contacts: [],
    contact: {}
};

export default function (state = initialState, action) {
    switch(action.type) {
        case ADD_CONTACT: {
           return {
               ...state,
               contacts: [action.payload, ...state.contacts]
           }
        }
        case GET_CONTACT: {
            return {
                ...state,
                contact: action.payload
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
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) => ( (contact.id === action.payload.id) ? action.payload : contact))
            }
        default: 
            return state;
    }
}