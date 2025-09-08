import React from 'react';
import { Line } from 'react-chartjs-2';
import { PredictionData } from '../types';

interface IceMeltChartProps {
  data: PredictionData[];
}

const IceMeltChart: React.FC<IceMeltChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.year),
    datasets: [
      {
        label: 'Ice Melt Prediction',
        data: data.map(item => item.meltAmount),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Melt Amount (in million tons)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Year',
        },
      },
    },
  };

  return (
    <div>
      <h2>Antarctic Ice Melt Prediction</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default IceMeltChart;