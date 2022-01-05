import PropTypes from "prop-types";
import React, { forwardRef, useContext } from "react";
import ContactContext from "../context/contact/contactContext";

const ContactItem = forwardRef(({ contact }, ref) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const onDeleteContact = (e) => {
    e.preventDefault();
    deleteContact(contact.id);
    clearCurrent();
  };

  const onEdit = (e) => {
    setCurrent(contact);
  };

  return (
    <div
      ref={ref}
      className='bg-sky-100 rounded-sm p-3 grid border-solid gap-3 border-2 border-blue-200	'
    >
      <div className='flex justify-between items-center '>
        <h3 className='text-xl text-blue-900 font-medium'>
          {contact.name.charAt(0).toUpperCase() + contact.name.slice(1)}
        </h3>
        <span
          className={`rounded-sm ${
            contact.type === "professional" ? "bg-green-600" : "bg-blue-800"
          } px-1 text-white`}
        >
          {contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}
        </span>
      </div>
      <ul className='text-gray-700 grid gap-1'>
        <li>
          <i className='fas fa-envelope-open'></i> {contact.email}
        </li>
        <li>
          <i className='fas fa-phone'></i> {contact.phone}
        </li>
      </ul>

      <p className='flex gap-3'>
        <button
          className='cursor-pointer hover:bg-gray-900 duration-200 active:bg-gray-500 bg-black text-white px-3 py-1 rounded-sm'
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className='cursor-pointer hover:bg-red-500 duration-200	 active:bg-red-300 bg-red-600 text-white px-3 py-1 rounded-sm'
          onClick={onDeleteContact}
        >
          Delete
        </button>
      </p>
    </div>
  );
});

ContactItem.prototype = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
