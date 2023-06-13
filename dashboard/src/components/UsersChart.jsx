import React from 'react'
import {  Pie, ResponsiveContainer, Cell, PieChart, Legend } from 'recharts'

const data = [
  { name: 'Total Earnings', value: 30440 },
  { name: 'Page Views', value: 310 },
  { name: 'Total Users', value: 620 },
  { name: 'Total Orders', value: 10210 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

function  UsersChart() {
  return (
    <div className='w-[17rem] h-[22rem] p-4 rounded-md border border-gray-200 flex flex-col bg-white '>
        <strong className=' text-gray-700 font-medium'>Users</strong>
        <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>
  )
};

export default UsersChart;
