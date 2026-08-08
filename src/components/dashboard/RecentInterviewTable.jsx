function RecentInterviewTable() {
  const history = JSON.parse(
    localStorage.getItem("interviewHistory") || "[]"
  );

  const recent = [...history].reverse().slice(0, 5);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Recent Interviews
      </h2>

      {recent.length === 0 ? (
        <p className="text-gray-400">
          No interview history available.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left">

            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-3">Date</th>
                <th>Role</th>
                <th>Difficulty</th>
                <th>Mode</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              {recent.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-800"
                >
                  <td className="py-3">{item.date}</td>
                  <td>{item.role}</td>
                  <td>{item.difficulty}</td>
                  <td>{item.mode}</td>
                  <td className="font-bold text-green-400">
                    {item.score}%
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}

export default RecentInterviewTable;