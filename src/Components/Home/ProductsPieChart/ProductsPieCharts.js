import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend, Scatter, CartesianGrid, XAxis, YAxis, Line, LineChart, Bar, BarChart } from 'recharts';

const ProductsPieCharts = ({ items }) => {
    return (
        <div  >
            <BarChart
                width={300}
                height={250}
                data={items}
                className="mx-auto my-4"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" stackId="a" fill="#8884d8" />
                <Bar dataKey="sold" stackId="a" fill="#82ca9d" />

            </BarChart>
        </div>
    );
};

export default ProductsPieCharts;