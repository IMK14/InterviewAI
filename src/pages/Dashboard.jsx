import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import PerformanceChart from "../components/dashboard/PerformanceChart";
import RecentInterviewTable from "../components/dashboard/RecentInterviewTable";
import AchievementBadges from "../components/dashboard/AchievementBadges";

function Dashboard() {
  const [userEmail, setUserEmail] = useState("");

  const [interviewCount, setInterviewCount] = useState(0);
  const [lastScore, setLastScore] = useState("--");
  const [bestScore, setBestScore] = useState("--");
  const [averageScore, setAverageScore] = useState("--");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      }
    });

    const count = Number(localStorage.getItem("interviewCount") || 0);
    setInterviewCount(count);

    const last = localStorage.getItem("lastScore");
    if (last !== null) {
      setLastScore(`${last}%`);
    }

    const history = JSON.parse(
      localStorage.getItem("scoreHistory") || "[]"
    );

    if (history.length > 0) {
      const best = Math.max(...history);

      const avg = Math.round(
        history.reduce((a, b) => a + b, 0) / history.length
      );

      setBestScore(`${best}%`);
      setAverageScore(`${avg}%`);
    }

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex bg-slate-950 text-white min-h-screen">
      <Sidebar />

      <main className="flex-1 p-10">
        <Topbar />

        <WelcomeCard email={userEmail} />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

          <StatsCard
            title="Interviews"
            value={interviewCount}
            color="text-cyan-400"
          />

          <StatsCard
            title="Last Score"
            value={lastScore}
            color="text-green-400"
          />

          <StatsCard
            title="Best Score"
            value={bestScore}
            color="text-yellow-400"
          />

          <StatsCard
            title="Average Score"
            value={averageScore}
            color="text-pink-400"
          />

       </div>

<PerformanceChart />

<AchievementBadges />

<RecentInterviewTable />

</main>
    </div>
  );
}

export default Dashboard;