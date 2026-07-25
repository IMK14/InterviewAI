function FeatureCard({ icon, title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-slate-900 border border-slate-800 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-4">
        {icon}
      </div>

      <h2 className="text-xl font-bold text-white">
        {title}
      </h2>

      <p className="text-gray-400 mt-3">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;