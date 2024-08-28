// HorizontalStackedBarChartComponent.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const HorizontalStackedBarChartComponent = ({ data }) => {
  const barChartData = [
    {
      name: 'Severity Levels',
      Critical: data.critical,
      High: data.high,
      Medium: data.medium,
      Low: data.low
    }
  ];

  return (
    <BarChart
      width={500}
      height={100}
      data={barChartData}
      layout="vertical"
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="Critical" stackId="a" fill="#FF8042" />
      <Bar dataKey="High" stackId="a" fill="#FFBB28" />
      <Bar dataKey="Medium" stackId="a" fill="#00C49F" />
      <Bar dataKey="Low" stackId="a" fill="#0088FE" />
    </BarChart>
  );
};

export default HorizontalStackedBarChartComponent;
