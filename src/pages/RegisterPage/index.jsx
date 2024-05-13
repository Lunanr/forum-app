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
    <div className="min-h-screen px-64 py-20 lg:px-64 bg-gradient-to-tr from-[#9BB6EB] to-[#D2E0FA]">
      <h1 className="text-xl mb-5 font-semibold">Create your account</h1>
      <RegisterInput register={onRegister} />
    </div>
  )
}

export default RegisterPage;