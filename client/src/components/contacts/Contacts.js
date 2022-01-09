/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect } from "react";
import FlipMove from "react-flip-move";
import ContactContext from "../context/contact/contactContext";
import ContactItem from "./ContactItem";
function Contacts() {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContact, loading_state } = contactContext;

  useEffect(() => {
    getContact();
  }, []);

  if (loading_state) {
    return <i className='text-3xl text-center fas fa-spinner fa-pulse'></i>;
  } else {
    return (
      <FlipMove typeName={null}>
        {filtered
          ? filtered?.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))
          : contacts?.map((contact) => (
              <ContactItem key={contact._id} contact={contact} />
            ))}

        {contacts?.length === 0 && !loading_state && (
          <h1 className='self-center justify-self-center'>
            There is no contact to show. Please add some contact.
          </h1>
        )}
      </FlipMove>
    );
  }
}

export default Contacts;
