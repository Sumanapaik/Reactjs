// DonutChart.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const DonutChart = ({ data }) => {
  const donutData = [
    { name: 'Connected', value: data.connected, color: '#0088FE' },
    { name: 'Not Connected', value: data.notConnected, color: '#00C49F' }
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={donutData}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {donutData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default DonutChart;
