import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully!");
    }catch (error) {
  if (error.code === "auth/email-already-in-use") {
    alert("This email is already registered. Please log in.");
  } else if (error.code === "auth/weak-password") {
    alert("Password must be at least 6 characters.");
  } else if (error.code === "auth/invalid-email") {
    alert("Please enter a valid email address.");
  } else {
    alert(error.message);
  }
} 
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <form
        onSubmit={handleSignup}
        className="bg-slate-900 p-10 rounded-xl w-96"
      >
        <h1 className="text-4xl text-cyan-400 font-bold text-center mb-8">
          Create Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-slate-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;