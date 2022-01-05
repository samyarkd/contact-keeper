import { useReducer } from "react";
import { v4 } from "uuid";
import {
  ADD_CONTACT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  SET_CURRENT,
  UPDATE_CONTACT,
} from "../type";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "samyar",
        email: "samyarkd@gmail.com",
        phone: "111-111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "hana",
        email: "hanakd@gmail.com",
        phone: "222-222-222",
        type: "professional",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contacts
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contacts
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateCurrent = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
