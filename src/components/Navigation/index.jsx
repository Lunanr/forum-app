import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../Modal/LoginModal";

const Navigation = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
  }

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  }
  return (
    <nav className="flex justify-between px-8 items-center py-6 bg-gradient-to-r from-blue-600  to-blue-400">
      <Link to="/*" className="text-4xl">Forum-App</Link>
      <button onClick={handleOpenLoginModal} className="rounded-full px-5 py-2  bg-blue-300 hover:bg-blue-700 cursor-pointer">
        Login
      </button>
      <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} />
    </nav>
  )
}

export default Navigation;