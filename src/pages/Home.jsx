import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex flex-col justify-center items-center mt-32">
        <h1 className="text-6xl font-bold text-cyan-400">
          InterviewAI
        </h1>

        <p className="mt-6 text-2xl text-gray-300">
          Practice AI-powered interviews and land your dream job.
        </p>

        <button className="mt-10 px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 text-xl">
          Start Interview
        </button>
      </div>
    </div>
  );
}

export default Home;