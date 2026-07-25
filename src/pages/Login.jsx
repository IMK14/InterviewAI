import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex justify-center items-center mt-20">
        <div className="bg-slate-900 p-10 rounded-2xl w-[400px] shadow-xl">

          <h1 className="text-4xl font-bold text-cyan-400 text-center mb-8">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-800 mb-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800 mb-6 outline-none"
          />

          <button
            className="w-full bg-cyan-500 hover:bg-cyan-600 p-3 rounded-lg font-bold"
          >
            Login
          </button>

          <p className="text-center mt-6 text-gray-400">
           Don't have an account?{" "}
           <Link
           to="/signup"
          className="text-cyan-400 hover:underline"
            >
            Sign Up
          </Link>
        </p>
          

        </div>
      </div>
    </div>
  );
}

export default Login;