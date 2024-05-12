import { Link } from "react-router-dom";

const Navigation = ({ authUser }) => {
  const isUserLoggedIn = authUser !== null;
  return (
    <nav className="flex justify-between px-8 items-center py-6 bg-gradient-to-r from-blue-600  to-blue-400">
      <Link to="/" className="text-4xl">Forum-App</Link>
      <button className="rounded-full px-5 py-2  bg-blue-300 hover:bg-blue-700 cursor-pointer">
        <Link to="/login">{isUserLoggedIn ? "Logout" : "login"}</Link>
      </button>
    </nav>
  )
}

export default Navigation;