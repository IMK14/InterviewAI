function AchievementBadges() {
  const interviewCount = Number(
    localStorage.getItem("interviewCount") || 0
  );

  const history = JSON.parse(
    localStorage.getItem("scoreHistory") || "[]"
  );

  const bestScore =
    history.length > 0 ? Math.max(...history) : 0;

  const badges = [];

  if (interviewCount >= 1)
    badges.push({
      icon: "🥇",
      title: "First Interview",
    });

  if (interviewCount >= 5)
    badges.push({
      icon: "🔥",
      title: "Consistency",
    });

  if (interviewCount >= 10)
    badges.push({
      icon: "📚",
      title: "Dedicated Learner",
    });

  if (bestScore >= 90)
    badges.push({
      icon: "🎯",
      title: "Excellent Performer",
    });

  if (bestScore === 100)
    badges.push({
      icon: "💯",
      title: "Perfect Score",
    });

  return (
    <div className="bg-slate-900 rounded-3xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Achievements
      </h2>

      {badges.length === 0 ? (
        <p className="text-gray-400">
          Complete interviews to unlock badges.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-5 text-center"
            >
              <div className="text-5xl">
                {badge.icon}
              </div>

              <p className="mt-3 font-semibold">
                {badge.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementBadges;