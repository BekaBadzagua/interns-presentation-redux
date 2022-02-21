import * as actionTypes from './actionTypes';

export const initContacts = () => {
  return {
    type: actionTypes.INIT_CONTACTS,
  };
};
export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    payload: contact,
  };
};
export const editContact = (contact) => {
  return {
    type: actionTypes.EDIT_CONTACT,
    payload: contact,
  };
};
export const deleteContact = (id) => {
  return {
    type: actionTypes.DELETE_CONTACT,
    payload: id,
  };
};
