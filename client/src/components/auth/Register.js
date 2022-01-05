import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AlertContext from "../context/Alert/AlertContext";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;
  const { setAlert } = useContext(AlertContext);
  const inputChangeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert("Please fill out all fields !! ", "red");
    } else if (password2 === password) {
      setAlert("Passwords dost match !! ", "red");
    }
  };

  return (
    <div className='grid items-top mt-20 justify-center break-words'>
      <div className='shadow-lg shadow-blue-400 grid gap-y-5 box-border w-full border-blue-600 rounded-xl h-max m-3 max-w-xl p-8 border-4'>
        <h1 className=' sm:text-3xl text-lg text-left'>
          Contact keeper{" "}
          <span className='font-medium text-blue-600'>Register</span> Page
        </h1>
        <form onSubmit={submitHandler} className='grid gap-5'>
          <div className='grid w-full'>
            <label htmlFor='name' className='text-blue-400'>
              Name
            </label>
            <input
              className='shadow-lg shadow-blue-200 focus:outline-none focus:border-blue-700 focus:border-2 p-1 px-2 border border-blue-300 rounded-sm'
              type='text'
              name='name'
              onChange={inputChangeHandler}
              value={name}
              required
            />
          </div>
          <div className='grid w-full'>
            <label htmlFor='email' className='text-blue-400'>
              Email
            </label>
            <input
              className='shadow-lg shadow-blue-200 focus:outline-none focus:border-blue-700 focus:border-2 p-1 px-2 border border-blue-300 rounded-sm'
              type='email'
              name='email'
              onChange={inputChangeHandler}
              value={email}
              required
            />
          </div>
          <div className='grid w-full'>
            <label
              htmlFor='password'
              id='label-f'
              className=' duration-200 text-blue-400'
            >
              Password
            </label>
            <input
              id='input-f'
              className='shadow-lg shadow-blue-200 focus:outline-none focus:border-blue-700 focus:border-2 p-1 px-2 border border-blue-300 rounded-sm'
              type='password'
              value={password}
              onChange={inputChangeHandler}
              name='password'
              required
              minLength='6'
            />
          </div>
          <div className='grid w-full'>
            <label
              htmlFor='password2'
              id='label-f'
              className=' duration-200 text-blue-400'
            >
              Confirm Password
            </label>
            <input
              id='input-f'
              className='shadow-lg shadow-blue-200 focus:outline-none focus:border-blue-700 focus:border-2 p-1 px-2 border border-blue-300 rounded-sm'
              type='password'
              value={password2}
              onChange={inputChangeHandler}
              name='password2'
              required
              minLength='6'
            />
          </div>
          <div className='mt-4'>
            <span className='block mb-3'>
              Dont have an account ?{" "}
              <Link className='text-blue-500 font-medium' to='/login'>
                Login{" "}
              </Link>
            </span>
            <button
              type='submit'
              className=' block w-full mb-5 shadow-lg shadow-blue-600 duration-200 hover:bg-blue-500 active:bg-blue-900 bg-blue-600 p-2 text-white rounded-sm'
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
