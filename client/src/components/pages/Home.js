/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import ContactForm from "../contacts/ContactForm";
import Contacts from "../contacts/Contacts";
import ContactsFilter from "../contacts/ContactsFilter";
import AlertContext from "../context/Alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";
import Alerts from "./../layout/Alert";

function Home() {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { loadUser, isAuthenticated, error } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    } else {
      window.location.pathname = "/login";
    }

    if (error) {
      setAlert(error, "red");
    }
  }, [isAuthenticated, error]);
  return (
    <>
      <Alerts />
      <div className='mt-10 grid sm:grid-cols-2 grid-cols-1 lg:gap-20 sm:gap-1'>
        <div className='grid grid-cols-1 items-start gap-4 mt-3'>
          <ContactForm />
        </div>
        <div className='relative grid grid-cols-1 gap-4 mt-3 items-start'>
          <ContactsFilter />
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default Home;
