import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { userShape } from "../Threads/ThreadItem";

export default function Navigation({ authUser, signOut }) {
  return (
    <div className="flex justify-between px-8 items-center py-6 bg-gradient-to-r from-blue-600  to-blue-400">
      <nav>
        <Link to="/" className="text-4xl">Forum-App</Link>
      </nav>
      <div className="flex items-center gap-5">
        <button className="rounded-full px-5 py-2  bg-blue-300 hover:bg-blue-700 cursor-pointer" onClick={signOut}>
          <Link to="/">logout</Link>
        </button>
        <p>Hi, {authUser.name}</p>
        <img className=" w-10 rounded-full"
          src={authUser.avatar} alt="Profile"
        />
      </div>
    </div>
  )
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
  signOut: PropTypes.func.isRequired,
}