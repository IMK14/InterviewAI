function ProgressCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg">

      <h2 className="text-xl font-bold mb-6">
        Today's Progress
      </h2>

      <div className="flex justify-center">

        <div className="relative w-40 h-40">

          <svg className="w-40 h-40 rotate-[-90deg]">

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#1e293b"
              strokeWidth="10"
              fill="none"
            />

            <circle
              cx="80"
              cy="80"
              r="65"
              stroke="#22d3ee"
              strokeWidth="10"
              fill="none"
              strokeDasharray="408"
              strokeDashoffset="122"
              strokeLinecap="round"
            />

          </svg>

          <div className="absolute inset-0 flex items-center justify-center">

            <div className="text-center">
              <h2 className="text-4xl font-bold text-cyan-400">
                70%
              </h2>

              <p className="text-gray-400">
                Completed
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;