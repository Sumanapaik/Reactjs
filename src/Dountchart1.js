
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const Donutchart1= ({ data }) => {
  const riskData = [
    { name: 'Failed', value: data.failed, color: '#FF8042' }, 
    { name: 'Warning', value: data.warning, color: '#FFBB28' }, 
    { name: 'Not Available', value: data.notAvailable, color: '#CCCCCC' }, 
    { name: 'Passed', value: data.passed, color: '#0088FE' } 
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
       data={riskData}
       cx="50%"
       cy="50%"
       innerRadius={60}
       outerRadius={80}
       fill="#8884d8"
       paddingAngle={5}
       dataKey="value"
     >
       {riskData.map((entry, index) => (
         <Cell key={`cell-${index}`} fill={entry.color} />
       ))}

      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default Donutchart1;
