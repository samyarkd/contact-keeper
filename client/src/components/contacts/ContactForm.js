import React, { useContext, useEffect, useState } from "react";
import ContactContext from "../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, current, clearCurrent,updateCurrent } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal",
  });

  const [type_check, setType_check] = useState(false);
  useEffect(() => {
    let mounted = true;
    if (mounted && current) {
      setContact(current);
      if (current.type === "personal") {
        setType_check(false);
      } else {
        setType_check(true);
      }
    }
    return () => {
      mounted = false;
    };
  }, [current]);

  const { name, email, phone } = contact;

  const onChange = (e) => {
    if (e.target.name === "type") {
      setType_check(!type_check);
      if (!type_check) {
        setContact({ ...contact, type: "professional" });
      } else {
        setContact({ ...contact, type: "personal" });
      }
    } else {
      setContact({ ...contact, [e.target.name]: e.target.value });
    }
  };

  const submitHandle = (e) => {
    e.preventDefault();
    if (current) {
      updateCurrent(contact)
    } else {
      addContact(contact);
    }
    clearAll(e);
  };

  const clearAll = (e) => {
    e.preventDefault();
    clearCurrent();
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal",
    });
    setType_check(false);
  };

  return (
    <form className='px-10 grid gap-5 items-start'>
      <h2 className='text-center text-blue-800 text-2xl font-medium'>
        {current ? "Edit contact" : "Add Contact"}
      </h2>
      <input
        placeholder='Name'
        type='text'
        name='name'
        value={name}
        onChange={(e) => onChange(e)}
        className='block px-2 py-1 border-solid border-gray-400  rounded-sm border w-full'
      />
      <input
        placeholder='Email'
        type='email'
        name='email'
        value={email}
        onChange={(e) => onChange(e)}
        className='block px-2 py-1 border-solid border-gray-400  rounded-sm border w-full'
      />
      <input
        placeholder='Phone'
        type='text'
        name='phone'
        value={phone}
        onChange={(e) => onChange(e)}
        className='block px-2 py-1 border-solid border-gray-400  rounded-sm border w-full'
      />

      <h5 className='text-xs text-gray-600'>Contact type</h5>
      <div className='grid grid-cols-3 items-center align-middle'>
        <span className='justify-self-end text-xs font-medium text-blue-700'>
          Personal
        </span>
        <label className='justify-self-center switch-st'>
          <input
            type='checkbox'
            name='type'
            checked={type_check}
            onChange={(e) => onChange(e)}
          />
          <span className='slider-st round-st'></span>
        </label>
        <span className='text-xs text-green-700 font-medium'>Professional</span>
      </div>
      <div className='grid grid-cols-1 gap-2'>
        <button
          type='submit'
          onClick={(e) => submitHandle(e)}
          className='bg-blue-800 rounded-sm text-white py-1 hover:bg-blue-600 duration-200 active:bg-blue-900'
        >
          {current ? "Save Changes" : "Add Contact"}
        </button>

        {current && (
          <button
            type='submit'
            onClick={(e) => clearAll(e)}
            className='bg-gray-800 rounded-sm text-white py-1 hover:bg-blue-600 duration-200 active:bg-blue-900'
          >
            Clear
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
