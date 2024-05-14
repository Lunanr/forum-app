import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../../states/authUser/action';
import LoginInput from '../../components/Login/LoginInput';

function LoginPage() {
  // Digunakan untuk mempermudah pengguanaan aksi Redux di dalam komponen fungsional, tanpa perlu mengimpor store atau action creator secara langsung
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    // mengirimkan aksi async untuk login
    dispatch(asyncSetAuthUser({ email, password }))

    navigate('/');
  }

  return (
    <div className="min-h-screen w-full px-64 py-20 lg:px-64 bg-gradient-to-tr from-[#9BB6EB] to-[#D2E0FA]">
      <h1 className="text-xl mb-5 font-semibold">
        Login
      </h1>
      <LoginInput login={onLogin} />
      <p className="mt-2">
        Don&apos;t have an account?
        {' '}
        <button className=" text-blue-700">
          <Link to="/register">Register</Link>
        </button>
      </p>
    </div>
  )
}

export default LoginPage;