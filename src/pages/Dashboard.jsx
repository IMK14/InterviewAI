import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";

function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10">
        <Topbar />

        <WelcomeCard email={userEmail} />

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <StatsCard title="Interviews" value="0" color="text-cyan-400" />
          <StatsCard title="AI Score" value="--" color="text-green-400" />
          <StatsCard title="Resume Score" value="--" color="text-yellow-400" />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;