import React from "react";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";
import ContactsFilter from "../contacts/ContactsFilter";

function Home() {
  return (
    <div className='mt-10 grid sm:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-1'>
      <div className='grid grid-cols-1 items-start gap-4 mt-3'>
        <ContactForm />
      </div>
      <div className='relative grid grid-cols-1 gap-4 mt-3 items-start'>
        <ContactsFilter />
        <Contacts />
      </div>
    </div>
  );
}

export default Home;
