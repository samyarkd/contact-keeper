/* eslint-disable array-callback-return */
import React, { useContext } from "react";
import FlipMove from "react-flip-move";
import ContactContext from "../context/contact/contactContext";
import ContactItem from "./ContactItem";
function Contacts() {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  return (
    <FlipMove typeName={null}>
      {filtered
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact, index) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      {contacts.length === 0 && (
        <h1 className='self-center justify-self-center'>
          There is no contact to show. Please add some contact.
        </h1>
      )}
    </FlipMove>
  );
}

export default Contacts;
