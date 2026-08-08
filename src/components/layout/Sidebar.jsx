import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "🏠",
    },
    {
      name: "AI Interview",
      path: "/interview",
      icon: "🎯",
    },
    {
      name: "Resume Lab",
      path: "/resume",
      icon: "📄",
    },
    {
      name: "History",
      path: "/history",
      icon: "📊",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "👤",
    },
    {
      name: "Settings",
      path: "/settings",
      icon: "⚙️",
    },
  ];

  return (
    <aside className="w-full md:w-72 bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800 md:min-h-screen md:sticky md:top-0">

      {/* Logo */}

      <div className="px-5 py-5 md:px-6 md:py-8">

        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          InterviewAI
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          AI Interview Platform
        </p>

      </div>

      {/* Navigation */}

      <nav className="px-3 md:px-4 pb-4 md:pb-8">

        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm md:text-base ${
                  isActive
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "text-gray-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">
                {item.icon}
              </span>

              <span className="whitespace-nowrap">
                {item.name}
              </span>
            </NavLink>
          ))}

        </div>

      </nav>

    </aside>
  );
}

export default Sidebar;