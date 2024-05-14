import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col bg-transparent gap-2">
      <label
        htmlFor="email"
        className="font-medium flex flex-col gap-3 mb-3"
      > Email
        <input
          className="p-1 px-3 rounded-full w-96"
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          onChange={onEmailChange}
          value={email}
        />
      </label>
      <label
        className="font-medium flex flex-col gap-3 mb-3"
        htmlFor="password"
      > Password
        <input
          className="p-1 px-3 rounded-full w-96"
          name="password"
          type="password"
          id="password"
          placeholder="Password"
          onChange={onPasswordChange}
          value={password}
        />
      </label>
      <button
        className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3"
        type="button"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
      <p className="mt-2">
        Don&apos;t have an account?
        {' '}
        <button
          className=" text-blue-700"
          type="button"
        >
          <Link to="/register">Register</Link>
        </button>
      </p>
    </form>

  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;