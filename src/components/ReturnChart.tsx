import { useRecoilValue } from "recoil";
import { mode } from "../atom";
import { Line } from "react-chartjs-2";
import { Chart, ChartData, ChartOptions } from "chart.js";
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
import zoomPlugin from "chartjs-plugin-zoom";
import React from "react";
Chart.register(CategoryScale, zoomPlugin);

const ReturnChart = () => {
  const blackMode = useRecoilValue(mode);
  Chart.defaults.color = `${blackMode ? "#fff" : "#333"}`;

  const data = {
    labels: [0, 1, 2, 3, 4],
    datasets: [
      {
        label: "yunki",
        data: [1, 2, 3, 4, 5],
      },
    ],
  };

  const options: ChartOptions<'line'> = {
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
    },
    plugins: {
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: "x",
        },
      },
    }
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default ReturnChart;
