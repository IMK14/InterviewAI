import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function PerformanceChart() {
  const history = JSON.parse(
    localStorage.getItem("scoreHistory") || "[]"
  );

  const data = {
    labels: history.map((_, index) => `Interview ${index + 1}`),
    datasets: [
      {
        label: "Interview Score (%)",
        data: history,
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6,182,212,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        min: 0,
        max: 100,
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div className="bg-slate-900 rounded-3xl p-8 mt-10">
      <h2 className="text-2xl font-bold text-cyan-400 mb-6">
        Performance Trend
      </h2>

      {history.length === 0 ? (
        <p className="text-gray-400">
          Complete an interview to see your performance chart.
        </p>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default PerformanceChart;