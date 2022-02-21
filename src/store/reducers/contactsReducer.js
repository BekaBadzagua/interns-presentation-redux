import * as actionTypes from '../actions/actionTypes';
import generateId from '../utils/IdGenerator';

const initialState = {
  list: [
    {
      id: 1,
      name: 'მელოტი კუ',
      phone: '599 99 99 99',
      onBoard: false,
    },
    {
      id: 2,
      name: 'ცხრაკუდა სკუნსი',
      phone: '599 99 99 90',
      onBoard: false,
    },
    {
      id: 3,
      name: 'გენიოსი ბატი',
      phone: '599 99 99 96',
      onBoard: false,
    },
    {
      id: 4,
      name: 'გრძელი ცხვარი',
      phone: '599 99 99 91',
      onBoard: true,
    },
    {
      id: 5,
      name: 'ეჭვიანი მაჩვზღარბა',
      phone: '599 99 99 91',
      onBoard: false,
    },
  ],
};

const InitializeContacts = (state) => {
  return {
    ...state,
  };
};

const addContact = (state, action) => {
  action.payload.id = generateId(state.list);
  action.payload.onBoard = false;

  const contacts = [...state.list, action.payload];
  return {
    ...state,
    list: contacts,
  };
};

const editContact = (state, action) => {
  const contacts = [...state.list]
    .filter((contact) => contact.id !== action.payload.id)
    .push(action.payload);
  return {
    ...state,
    list: [...contacts],
  };
};

const deleteContact = (state, action) => {
  const contacts = [...state.list].filter(
    (contact) => contact.id !== action.payload
  );
  return {
    ...state,
    list: contacts,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_CONTACTS:
      return InitializeContacts(state);
    case actionTypes.ADD_CONTACT:
      return addContact(state, action);
    case actionTypes.EDIT_CONTACT:
      return editContact(state, action);
    case actionTypes.DELETE_CONTACT:
      return deleteContact(state, action);
    default:
      return state;
  }
};
export default reducer;
