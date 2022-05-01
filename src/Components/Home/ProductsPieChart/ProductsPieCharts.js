import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend, Scatter } from 'recharts';

const ProductsPieCharts = ({ items }) => {
    return (
        <ResponsiveContainer width="90%" height={300}>
            <PieChart className="mx-auto">
                <Pie data={items} dataKey="quantity" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={items} dataKey="sold" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip />

                <Scatter name="Product" data={items} fill="#8884d8" line shape="cross" />
                <Scatter name="Sold" data={items} fill="#82ca9d" line shape="diamond" />

            </PieChart>
        </ResponsiveContainer>
    );
};

export default ProductsPieCharts;