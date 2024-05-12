import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../../states/users/action";
import RegisterInput from "../../components/Register/RegisterInput";

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/login');
  };

  return (
    <section className="register-page">
      <h1>Create your account</h1>
      <RegisterInput register={onRegister} />
    </section>
  )
}

export default RegisterPage;