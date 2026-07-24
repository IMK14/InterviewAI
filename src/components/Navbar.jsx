function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-slate-900 shadow-lg">
      <h1 className="text-2xl font-bold text-cyan-400">
        InterviewAI
      </h1>

      <div className="space-x-6">
        <a href="#" className="hover:text-cyan-400">Home</a>
        <a href="#" className="hover:text-cyan-400">Features</a>
        <a href="#" className="hover:text-cyan-400">About</a>
        <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;