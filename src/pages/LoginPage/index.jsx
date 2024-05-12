import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncSetAuthUser } from "../../states/authUser/action";
import LoginInput from "../../components/Login/LoginInput";

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
    <section className="login-page">
      <h1>Login</h1>
      <LoginInput login={onLogin} />
      <p className="mt-2">
        Don&apos;t have an account?
        {' '}
        <button className=" text-blue-700">
          <Link to="/register">Register</Link>
        </button>
      </p>
    </section>
  )
}

export default LoginPage;