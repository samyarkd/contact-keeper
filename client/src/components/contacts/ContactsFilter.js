import React, { useContext, useRef } from "react";
import ContactContext from "../context/contact/contactContext";

const ContactsFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter } = contactContext;
  const text = useRef("");
  const onFilterChange = (e) => {
    if (text.current.value !== "") {
      filterContacts(text.current.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className='grid grid-cols-1'>
      <input
        ref={text}
        className='w-100 border border-gray-400 rounded-sm p-1'
        name='search'
        value={text.current.value || ""}
        placeholder='Filter Contacts...'
        onChange={onFilterChange}
      />
    </form>
  );
};

export default ContactsFilter;
