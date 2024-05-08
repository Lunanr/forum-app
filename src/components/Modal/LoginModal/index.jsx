import { useState } from "react";
import useInput from "../../../hooks/useInput";
import { IoMdClose } from "react-icons/io";
import RegisterModal from "../RegisterModal";

const LoginModal = ({ isOpen, onClose, login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  }

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
    onClose(false);
  }

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
            {/* Body */}
            <form className="flex flex-col bg-transparent gap-2">
              <label htmlFor="email">Email</label>
              <input className="p-1 px-3 rounded-full" type="email" value={email} onChange={onEmailChange} placeholder="Email" />
              <label htmlFor="password">Password</label>
              <input className="p-1 px-3 rounded-full" type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
              <button className=" bg-blue-300 px-5 py-2 rounded-full hover:bg-blue-700 mt-3" type="submit" onClick={() => login({ email, password })}>Login</button>
            </form>
            {/* Footer */}
            <p className="mt-2">
              Don&apos;t have an account?
              {' '}
              <button onClick={handleOpenRegisterModal} className=" text-blue-700">
                Register
              </button>
              <RegisterModal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginModal;