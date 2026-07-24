function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-6">

      <h1 className="text-6xl md:text-7xl font-extrabold text-cyan-400">
        InterviewAI
      </h1>

      <p className="mt-6 text-2xl text-gray-300 max-w-2xl">
        Practice AI-powered interviews, improve your confidence,
        and land your dream job.
      </p>

      <div className="mt-10 flex gap-6">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl text-xl font-semibold">
          Start Interview
        </button>

        <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 rounded-xl text-xl font-semibold">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;