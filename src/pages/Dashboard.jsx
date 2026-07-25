import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
    navigate("/login");
  };

  const cards = [
    {
      title: "Start AI Interview",
      description: "Practice technical and HR interviews with AI."
    },
    {
      title: "Resume Analyzer",
      description: "Upload your resume and receive AI feedback."
    },
    {
      title: "Interview History",
      description: "View your previous interview reports."
    },
    {
      title: "My Profile",
      description: "Manage your account information."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-8 py-12">

        <h1 className="text-5xl font-bold text-cyan-400">
          Welcome 👋
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Ready to master your next interview?
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:scale-105 hover:bg-slate-800 transition duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-bold text-cyan-300">
                {card.title}
              </h2>

              <p className="text-gray-400 mt-3">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        <div className="flex justify-center mt-14">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-xl text-lg font-semibold"
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;