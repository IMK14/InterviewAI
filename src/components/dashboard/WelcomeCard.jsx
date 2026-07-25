function WelcomeCard({ email }) {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 shadow-xl">

      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-4 text-lg opacity-90">
        {email}
      </p>

      <p className="mt-6 text-xl">
        Ready to conquer today's interview?
      </p>

    </div>
  );
}

export default WelcomeCard;