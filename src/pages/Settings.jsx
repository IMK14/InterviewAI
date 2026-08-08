import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);

  const [settings, setSettings] = useState({
    defaultDifficulty: "Medium",
    defaultMode: "Text",
    defaultDuration: "20 Minutes",
    sound: true,
  });

  useEffect(() => {
    const savedSettings = JSON.parse(
      localStorage.getItem("appSettings") || "null"
    );

    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  const updateSetting = (key, value) => {
    setSettings((previous) => ({
      ...previous,
      [key]: value,
    }));

    setSaved(false);
  };

  const saveSettings = () => {
    localStorage.setItem(
      "appSettings",
      JSON.stringify(settings)
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const clearLocalData = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your interview statistics and history? This cannot be undone."
    );

    if (!confirmed) return;

    localStorage.removeItem("interviewCount");
    localStorage.removeItem("lastScore");
    localStorage.removeItem("scoreHistory");
    localStorage.removeItem("interviewHistory");

    alert("Interview statistics and history have been cleared.");

    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 sm:p-6 md:p-10">

      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => navigate("/dashboard")}
          className="text-cyan-400 hover:text-cyan-300 mb-6"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-3xl sm:text-5xl font-bold text-cyan-400">
          Settings
        </h1>

        <p className="text-gray-400 mt-2 mb-8">
          Customize your InterviewAI experience.
        </p>

        {/* Interview Preferences */}

        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8">

          <h2 className="text-2xl font-bold mb-6">
            Interview Preferences
          </h2>

          {/* Difficulty */}

          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              Default Difficulty
            </label>

            <select
              value={settings.defaultDifficulty}
              onChange={(e) =>
                updateSetting(
                  "defaultDifficulty",
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

          </div>

          {/* Mode */}

          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              Default Interview Mode
            </label>

            <select
              value={settings.defaultMode}
              onChange={(e) =>
                updateSetting(
                  "defaultMode",
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
            >
              <option>Text</option>
              <option>Voice</option>
            </select>

          </div>

          {/* Duration */}

          <div className="mb-6">

            <label className="block text-gray-300 mb-2">
              Default Interview Duration
            </label>

            <select
              value={settings.defaultDuration}
              onChange={(e) =>
                updateSetting(
                  "defaultDuration",
                  e.target.value
                )
              }
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 outline-none focus:border-cyan-400"
            >
              <option>10 Minutes</option>
              <option>20 Minutes</option>
              <option>30 Minutes</option>
            </select>

          </div>

          {/* Sound */}

          <div className="flex items-center justify-between bg-slate-800 rounded-xl p-4">

            <div>

              <p className="font-semibold">
                Sound
              </p>

              <p className="text-sm text-gray-400">
                Enable interview sound effects.
              </p>

            </div>

            <button
              onClick={() =>
                updateSetting(
                  "sound",
                  !settings.sound
                )
              }
              className={`px-5 py-2 rounded-xl ${
                settings.sound
                  ? "bg-green-500"
                  : "bg-gray-600"
              }`}
            >
              {settings.sound ? "ON" : "OFF"}
            </button>

          </div>

          {/* Save */}

          <button
            onClick={saveSettings}
            className="w-full mt-8 bg-cyan-500 hover:bg-cyan-600 rounded-xl p-4 font-bold"
          >
            Save Settings
          </button>

          {saved && (
            <p className="text-green-400 text-center mt-4">
              ✓ Settings saved successfully
            </p>
          )}

        </div>

        {/* Data Management */}

        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 mt-6">

          <h2 className="text-2xl font-bold mb-2">
            Data Management
          </h2>

          <p className="text-gray-400 mb-5">
            Remove locally stored interview statistics and history.
          </p>

          <button
            onClick={clearLocalData}
            className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold"
          >
            Clear Interview Data
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;