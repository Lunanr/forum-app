import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from '../../states/users/action';
import RegisterInput from '../../components/Register/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));

    navigate('/');
  };

  return (
    <div className="min-h-screen px-64 py-20 bg-gradient-to-tr from-[#9BB6EB] to-[#D2E0FA] flex flex-col items-center">
      <h1 className="text-xl mb-5 font-semibold">Create your account</h1>
      <div className="mx-auto">
        <RegisterInput register={onRegister} />
      </div>
    </div>
  );
}

export default RegisterPage;