import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../../states/authUser/action';
import LoginInput from '../../components/Login/LoginInput';

function LoginPage() {
  // Digunakan untuk mempermudah pengguanaan aksi Redux di dalam komponen fungsional,
  // tanpa perlu mengimpor store atau action creator secara langsung
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    // mengirimkan aksi async untuk login
    dispatch(asyncSetAuthUser({ email, password }));

    navigate('/');
  };

  return (
    <div className="min-h-screen px-64 py-20 bg-gradient-to-tr from-[#9BB6EB] to-[#D2E0FA] flex flex-col items-center">
      <h1 className="text-xl mb-5 font-semibold">
        Login
      </h1>
      <div className="mx-auto">
        <LoginInput login={onLogin} />
      </div>
    </div>
  );
}

export default LoginPage;