import useInput from '../../../hooks/useInput';
import PropTypes from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col bg-transparent gap-2">
      <label className="font-medium" htmlFor="email">Email</label>
      <input className="p-1 px-3 rounded-full" type="email" placeholder="Email" value={email} onChange={onEmailChange} />
      <label className="font-medium" htmlFor="password">Password</label>
      <input className="p-1 px-3 rounded-full" type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3" type="button" onClick={() => login({ email, password })}>Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginInput;