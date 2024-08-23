import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'group1', value: 400 },
  { name: 'group2', value: 300 },
  { name: 'group3', value: 300 },
  { name: 'group4', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MyPieChart = () => (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      labelLine={false}
      outerRadius={150}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);

export default MyPieChart;
