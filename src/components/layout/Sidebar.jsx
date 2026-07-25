import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "AI Interview", path: "/interview", icon: "🎤" },
    { name: "Resume Lab", path: "/resume", icon: "📄" },
    { name: "History", path: "/history", icon: "📊" },
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 min-h-screen p-6">

      <h1 className="text-3xl font-bold text-cyan-400 mb-12">
        InterviewAI
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                isActive
                  ? "bg-cyan-500 text-white"
                  : "text-gray-300 hover:bg-slate-800"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;