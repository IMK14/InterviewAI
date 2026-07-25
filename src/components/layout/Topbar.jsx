function Topbar() {
  return (
    <div className="flex justify-between items-center mb-10">

      <div>
        <h2 className="text-4xl font-bold text-white">
          Dashboard
        </h2>

        <p className="text-gray-400 mt-2">
          Welcome back! Continue your AI interview journey.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="bg-slate-900 px-4 py-2 rounded-xl">
          🔔
        </div>

        <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center font-bold text-xl">
          M
        </div>

      </div>

    </div>
  );
}

export default Topbar;