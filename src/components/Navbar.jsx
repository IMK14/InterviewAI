import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 shadow-lg">

      <Link to="/" className="text-2xl font-bold text-cyan-400">
        InterviewAI
      </Link>

      <div className="space-x-6">

        <Link to="/" className="hover:text-cyan-400">
          Home
        </Link>

        <Link to="/login" className="hover:text-cyan-400">
          Login
        </Link>

        <Link to="/signup" className="hover:text-cyan-400">
          Signup
        </Link>

        <Link
          to="/dashboard"
          className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600"
        >
          Dashboard
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;