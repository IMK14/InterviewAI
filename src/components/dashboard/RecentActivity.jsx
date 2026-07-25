function RecentActivity() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        <div className="bg-slate-800 rounded-xl p-4">
          🎤 HR Interview Completed
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          📄 Resume Uploaded
        </div>

        <div className="bg-slate-800 rounded-xl p-4">
          ⭐ AI Score Improved
        </div>

      </div>

    </div>
  );
}

export default RecentActivity;