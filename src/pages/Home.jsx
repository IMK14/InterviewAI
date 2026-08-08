import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">

      <Navbar />

      {/* Hero */}

      <section className="px-4 sm:px-6 md:px-10 pt-20 pb-16">

        <div className="max-w-6xl mx-auto text-center">

          <div className="inline-block bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            AI-Powered Interview Preparation
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
            Prepare Smarter.
            <br />

            <span className="text-cyan-400">
              Interview Better.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg sm:text-xl text-gray-400 leading-relaxed">
            Practice realistic technical interviews, improve your
            answers, analyze your resume and track your performance
            with InterviewAI.
          </p>

          {/* Hero Buttons */}

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <button
              onClick={() => navigate("/interview")}
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-bold transition"
            >
              Start Interview
            </button>

            <button
              onClick={() => navigate("/resume")}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold transition"
            >
              Analyze Resume
            </button>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="px-4 sm:px-6 md:px-10 py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Everything You Need to Prepare
            </h2>

            <p className="text-gray-400 mt-3">
              One platform for interview practice and career preparation.
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {/* Feature 1 */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition">

              <div className="text-4xl mb-4">
                🎯
              </div>

              <h3 className="text-xl font-bold">
                AI Interviews
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Practice role-based technical interviews with
                different difficulty levels.
              </p>

            </div>

            {/* Feature 2 */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition">

              <div className="text-4xl mb-4">
                🎤
              </div>

              <h3 className="text-xl font-bold">
                Voice Interviews
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Answer interview questions using your voice
                and practice speaking confidently.
              </p>

            </div>

            {/* Feature 3 */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition">

              <div className="text-4xl mb-4">
                📄
              </div>

              <h3 className="text-xl font-bold">
                Resume Analyzer
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Analyze your resume, find missing skills and
                improve your ATS score.
              </p>

            </div>

            {/* Feature 4 */}

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition">

              <div className="text-4xl mb-4">
                📊
              </div>

              <h3 className="text-xl font-bold">
                Track Performance
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Monitor interview scores, history and progress
                from your personal dashboard.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* How It Works */}

      <section className="px-4 sm:px-6 md:px-10 py-16 bg-slate-900/40">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">

            <h2 className="text-3xl sm:text-4xl font-bold">
              How It Works
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
                1
              </div>

              <h3 className="text-xl font-bold mt-4">
                Choose Your Interview
              </h3>

              <p className="text-gray-400 mt-2">
                Select your role, difficulty, mode and duration.
              </p>

            </div>

            <div className="text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
                2
              </div>

              <h3 className="text-xl font-bold mt-4">
                Practice
              </h3>

              <p className="text-gray-400 mt-2">
                Answer questions using text or voice while
                managing your interview time.
              </p>

            </div>

            <div className="text-center">

              <div className="w-12 h-12 mx-auto rounded-full bg-cyan-500 flex items-center justify-center text-xl font-bold">
                3
              </div>

              <h3 className="text-xl font-bold mt-4">
                Improve
              </h3>

              <p className="text-gray-400 mt-2">
                Review your score, missing keywords and
                performance history.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="px-4 sm:px-6 md:px-10 py-20">

        <div className="max-w-4xl mx-auto text-center bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Practice?
          </h2>

          <p className="text-gray-400 mt-3">
            Start your next interview and see how you perform.
          </p>

          <button
            onClick={() => navigate("/interview")}
            className="mt-7 bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-lg font-bold"
          >
            Start Your Interview
          </button>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800 px-4 py-8 text-center">

        <p className="text-gray-500 text-sm">
          InterviewAI — AI-powered interview preparation platform.
        </p>

      </footer>

    </div>
  );
}

export default Home;