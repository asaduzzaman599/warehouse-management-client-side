import React, { PureComponent } from 'react';

import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const ProductsPieCharts = ({ total }) => {

    const data = [
        { name: 'Product', value: total.totalProduct },
        { name: 'Sold', value: total.totalSold },
    ];
    const COLORS = ['#FF8042', '#0088FE', '#FFBB28', '#00C49F',];
    return (
        <ResponsiveContainer width="90%" height={200}
            className='mx-auto'>
            <PieChart width="90%" height={200} className='mx-auto'
            >
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <Legend />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default ProductsPieCharts;