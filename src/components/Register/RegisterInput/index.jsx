import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="name">Name</label>
      <input className="p-1 px-3 rounded-full" type="text" placeholder="Name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input className="p-1 px-3 rounded-full" type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input className="p-1 px-3 rounded-full" type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3" type="button" onClick={() => register({ name, email, password })}>Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;