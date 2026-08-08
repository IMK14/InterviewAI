import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [interviewCount, setInterviewCount] = useState(0);
  const [bestScore, setBestScore] = useState("--");
  const [averageScore, setAverageScore] = useState("--");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    const count = Number(
      localStorage.getItem("interviewCount") || 0
    );

    setInterviewCount(count);

    const history = JSON.parse(
      localStorage.getItem("scoreHistory") || "[]"
    );

    if (history.length > 0) {
      const best = Math.max(...history);

      const average = Math.round(
        history.reduce((total, score) => total + score, 0) /
          history.length
      );

      setBestScore(`${best}%`);
      setAverageScore(`${average}%`);
    }

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      alert("Unable to logout. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 md:p-10">

      <div className="max-w-5xl mx-auto">

        {/* Header */}

        <div className="mb-8">

          <button
            onClick={() => navigate("/dashboard")}
            className="text-cyan-400 hover:text-cyan-300 mb-5"
          >
            ← Back to Dashboard
          </button>

          <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400">
            My Profile
          </h1>

          <p className="text-gray-400 mt-2">
            View your InterviewAI account and performance.
          </p>

        </div>

        {/* Profile Card */}

        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8">

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Avatar */}

            <div className="w-24 h-24 rounded-full bg-cyan-500 flex items-center justify-center text-4xl font-bold">
              {user?.email
                ? user.email.charAt(0).toUpperCase()
                : "U"}
            </div>

            {/* User Details */}

            <div className="text-center sm:text-left">

              <h2 className="text-2xl font-bold">
                {user?.displayName || "InterviewAI User"}
              </h2>

              <p className="text-gray-400 mt-2 break-all">
                {user?.email || "No email available"}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Account authenticated with Firebase
              </p>

            </div>

          </div>

        </div>

        {/* Performance */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">

          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <p className="text-gray-400">
              Interviews
            </p>

            <p className="text-4xl font-bold text-cyan-400 mt-2">
              {interviewCount}
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <p className="text-gray-400">
              Best Score
            </p>

            <p className="text-4xl font-bold text-yellow-400 mt-2">
              {bestScore}
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6 text-center">

            <p className="text-gray-400">
              Average Score
            </p>

            <p className="text-4xl font-bold text-green-400 mt-2">
              {averageScore}
            </p>

          </div>

        </div>

        {/* Account Actions */}

        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 mt-6">

          <h2 className="text-2xl font-bold mb-5">
            Account
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">

            <button
              onClick={() => navigate("/history")}
              className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl"
            >
              View Interview History
            </button>

            <button
              onClick={() => navigate("/settings")}
              className="bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-xl"
            >
              Settings
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;