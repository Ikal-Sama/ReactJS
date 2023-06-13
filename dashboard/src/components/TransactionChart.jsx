import React from 'react'
import { BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis,
Legend, Bar } from 'recharts';

const data = [
    {
        name: 'John',
        expense: 4000,
        income: 60400
    },
    {
        name: 'Clara',
        expense: 4400,
        income: 10400
    },
    {
        name: 'Kerl',
        expense: 4500,
        income: 2700
    },
    {
        name: 'Froilan',
        expense: 50109,
        income: 3980
    },
    {
        name: 'Almario',
        expense: 7900,
        income: 30500
    },
    {
        name: 'Roland',
        expense: 1400,
        income: 600
    },
    {
        name: 'Hans',
        expense: 5000,
        income: 6400
    },
    {
        name: 'Mikel',
        expense: 3000,
        income: 2100
    },
    {
        name: 'Doe',
        expense: 100,
        income: 3400
    },
    
];
console.log(data);

function TransactionChart() {
  return (
    <div className='w-[53rem] h-[22rem] p-4 rounded-md border border-gray-200 flex flex-col bg-white '>
        <strong className=' text-gray-700 font-medium'>Transactions</strong>
        <div className="w-full mt-3 flex-1 text-xs">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    left: -10,
                    bottom: 0
                }}>
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
                    <XAxis dataKey="name"/>
                    <YAxis />
                    <Tooltip /> 
                    <Legend />
                    <Bar dataKey="income" stackId="a" fill="#8884d8" />
                    <Bar dataKey="expense" stackId="a" fill="#82ca9d" />
        
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default TransactionChart;


