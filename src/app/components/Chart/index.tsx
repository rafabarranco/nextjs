'use client';

import { useEffect, useState } from 'react';
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

import { useNobelPrizes } from '@/app/hooks/useNobelPrizes';
import { ChartData } from '@/app/models/ChartData';
import { Prize } from '@/app/models/Prize';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default function Chart() {
  const { data, isLoading, error } = useNobelPrizes();
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    if (data) {
      const prizesGroupedByYear = data.prizes.reduce(
        (acc: { [key: number]: number }, prize: Prize) => {
          const year = prize.year;
          const laureatesCount = prize.laureates?.length || 0;

          if (acc[year]) {
            acc[year] += laureatesCount;
          } else {
            acc[year] = laureatesCount;
          }

          return acc;
        },
        {},
      );

      const labels: string[] = Object.keys(prizesGroupedByYear).map(
        (year) => year,
      );
      const dataPoints: number[] = Object.values(prizesGroupedByYear);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Cantidad de Premios por Año',
            data: dataPoints,
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
          },
        ],
      });
    }
  }, [data]);

  if (isLoading) return <p>Loading chart...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!chartData) return null;

  return (
    <Bar
      options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
      data={chartData}
    />
  );
}
