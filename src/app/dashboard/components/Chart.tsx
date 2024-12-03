'use client';

import { useRef, useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Prize } from '@/app/models/Prize';
import { ChartData } from '@/app/models/ChartData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartProps {
  prizes: Prize[];
}

const Chart: React.FC<ChartProps> = ({ prizes }) => {
  const chartRef = useRef<ChartJS<'bar'> | null>(null);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    const labels = prizes.map((prize) => prize.year);
    const data: ChartData = {
      labels,
      datasets: [
        {
          label: 'Cantidad de Premios',
          data: prizes.map((prize) => prize.laureates?.length || 0),
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
        },
      ],
    };
    setChartData(data);
  }, [prizes]);

  if (!chartData) {
    return <div>Loading chart...</div>;
  }

  return (
    <Bar
      ref={chartRef}
      options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
      data={chartData}
    />
  );
};

export default Chart;
