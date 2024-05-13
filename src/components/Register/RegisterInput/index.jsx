import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = () => {
    if (password.length >= 8) {
      register({ name, email, password });
    } else {
      window.alert("password must be at least 8 characters")
    }
  }

  return (
    <form className="flex flex-col gap-2">
      <label className="font-medium" htmlFor="name">Name</label>
      <input className="p-1 px-3 rounded-full" type="text" placeholder="Name" value={name} onChange={onNameChange} />
      <label className="font-medium" htmlFor="email">Email</label>
      <input className="p-1 px-3 rounded-full" type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <label className="font-medium" htmlFor="password">Password</label>
      <input className="p-1 px-3 rounded-full" type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3" type="button" onClick={handleSubmit}>Register</button>
      <p className="mt-2">
        have an account?
        {' '}
        <button className=" text-blue-700">
          <Link to="/login">login</Link>
        </button>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;