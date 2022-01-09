import axios from "axios";
import { useReducer } from "react";
import {
  ADD_CONTACT,
  CLEAR_CONTACTS,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  CONTACT_ERROR,
  DELETE_CONTACT,
  FILTER_CONTACTS,
  GET_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
} from "../type";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";

const ContactState = (props) => {
  const initialState = {
    contacts: null,
    current: null,
    filtered: null,
    error: null,
    loading_state: true,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // GET Contact
  const getContact = async () => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_API_URL + "/api/contacts"
      );
      dispatch({ type: GET_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Add Contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Contact-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        process.env.REACT_APP_API_URL + "/api/contacts",
        contact,
        config
      );
      dispatch({ type: ADD_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
  };

  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(process.env.REACT_APP_API_URL + `/api/contacts/${id}`);
      dispatch({ type: DELETE_CONTACT, payload: id });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
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
  const updateCurrent = async (contact) => {
    const config = {
      headers: {
        "Contact-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        process.env.REACT_APP_API_URL + `/api/contacts/${contact._id}`,
        contact,
        config
      );
      dispatch({ type: UPDATE_CONTACT, payload: res.data });
    } catch (err) {
      dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
    }
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
        error: state.error,
        loading_state: state.loading_state,
        addContact,
        getContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateCurrent,
        filterContacts,
        clearFilter,
        clearContacts,
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
