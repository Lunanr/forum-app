// import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/useInput";
import { IoMdClose } from "react-icons/io";
import { asyncRegisterUser } from "../../../states/users/action";

const RegisterModal = ({ isOpen, onClose }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const dispatch = useDispatch();

  const onRegister = () => {
    dispatch(asyncRegisterUser({ name, email, password }))
      .then(() => {
        onClose(false);
      })
  };


  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-filter backdrop-blur-md">
          <div className="w-[500px] h-[400px] p-4 bg-gradient-to-tr from-[#4982f5ef] to-[#D2E0FA] rounded-2xl">
            {/* Header */}
            <div className="flex justify-end">
              <button onClick={() => onClose(false)}>
                <IoMdClose />
              </button>
            </div>
            {/* body */}
            <form className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input className="p-1 px-3 rounded-full" type="text" value={name} onChange={onNameChange} placeholder="Name" />
              <label htmlFor="email">Email</label>
              <input className="p-1 px-3 rounded-full" type="email" value={email} onChange={onEmailChange} placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input className="p-1 px-3 rounded-full" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
              <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3" type="submit" onClick={onRegister}>Register</button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default RegisterModal;