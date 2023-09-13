import { useRecoilValue } from "recoil";
import { mode } from "../atom";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
  } from "chart.js/auto";

const ReturnChart = () => {
  const blackMode = useRecoilValue(mode);
  Chart.defaults.color = `${blackMode ? "#fff" : "#333"}`;

  const line = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
      {
        label: "yunki",
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        position: "left",
        grid: {
          display: false,
        },
      },
    },
    elements: {
        line: {
            tension: 0
        }
    }
  };

  return (
    <>
      <Line data={line} options={options} />
    </>
  );
};

export default ReturnChart;
