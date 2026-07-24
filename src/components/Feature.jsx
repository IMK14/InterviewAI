function Features() {
  const features = [
    {
      title: "AI Interview",
      description: "Practice interviews with AI-generated questions.",
    },
    {
      title: "Resume Analysis",
      description: "Upload your resume and get instant feedback.",
    },
    {
      title: "Performance Analytics",
      description: "Track your interview scores and improve.",
    },
  ];

  return (
    <section className="bg-slate-900 text-white py-20 px-10">
      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
        Why Choose InterviewAI?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 p-8 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">
              {feature.title}
            </h3>

            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;