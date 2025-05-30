import React from 'react';
import { Card, CardHeader, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HarvestChart = () => {
  const data = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Producción 2023',
        data: [1200, 1900, 1500, 2000, 1800, 2100],
        borderColor: '#2D5A27',
        backgroundColor: 'rgba(45, 90, 39, 0.1)',
        tension: 0.3,
      },
      {
        label: 'Predicción 2023',
        data: [null, null, null, null, 1800, 2100, 2300, 2400, 2200],
        borderColor: '#C1F24B',
        borderDash: [5, 5],
        backgroundColor: 'rgba(193, 242, 75, 0.1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <Card>
      <CardHeader title="Predicción de Cosecha" />
      <Box sx={{ p: 3, pb: 1 }}>
        <Line options={options} data={data} />
      </Box>
    </Card>
  );
};

export default HarvestChart;