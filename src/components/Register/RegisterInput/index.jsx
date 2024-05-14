import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = () => {
    if (password.length >= 8) {
      register({ name, email, password });
    } else {
      window.alert('password must be at least 8 characters');
    }
  };

  return (
    <form>
      <label
        className="font-medium flex flex-col gap-3 mb-3"
        htmlFor="name"
      > Name
        <input className="p-1 px-3 rounded-full w-96" type="text" placeholder="Name" value={name} onChange={onNameChange} />
      </label>
      <label
        className="font-medium flex flex-col gap-3 mb-3"
        htmlFor="email"
      > Email
        <input className="p-1 px-3 rounded-full w-96" type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      </label>
      <label
        className="font-medium flex flex-col gap-3 w-96"
        htmlFor="password"
      > Password
        <input className="p-1 px-3 rounded-full" type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      </label>
      <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-5 w-96" type="button" onClick={handleSubmit}>Register</button>
      <p className="mt-2">
        have an account?
        {' '}
        <button
          className=" text-blue-700"
          type="button"
        >
          <Link to="/">login</Link>
        </button>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;