import React from "react";
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
import { ChartType } from "../../models/CovidDataModels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface Props {
  globalData: ChartType | null;
  selectedDate: string;
}

const GenericChart: React.FC<Props> = ({ globalData, selectedDate }) => {
  const options  = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const pointBackgroundColor = globalData?.labels?.map((label) =>
    label === selectedDate ? "red" : "rgba(0, 0, 0, 0)"
  );

  const pointRadius = globalData?.labels?.map((label) =>
    label === selectedDate ? 6 : 4
  );

  const pointBorderWidth = globalData?.labels?.map((label) =>
    label === selectedDate ? 2 : 1
  );

  const modifiedData = {
    ...globalData,
    datasets: globalData?.datasets?.map((dataset) => ({
      ...dataset,
      pointBackgroundColor: pointBackgroundColor,
      pointRadius: pointRadius,
      pointBorderWidth: pointBorderWidth,
    })),
  };

  return <Line options={options} data={modifiedData} />;
};

export default GenericChart;
