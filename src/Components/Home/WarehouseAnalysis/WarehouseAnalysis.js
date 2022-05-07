import React from 'react';
import ProductsPieCharts from '../ProductsPieChart/ProductsPieCharts';
const WarehouseAnalysis = ({ items }) => {
    let totalProduct = 0;
    let totalSold = 0;
    items.forEach(item => {
        totalProduct = totalProduct + item.quantity
        totalSold = totalSold + item.sold;
    });
    return (
        <div className=' md:w-4/5 mx-auto  py-6 px-10 my-6'>
            <h3 className='my-10 text-2xl font-medium'>Warehouse Analysis</h3>
            <div className=' grid md:grid-cols-2  w-full gap-10 '>
                <div className='flex  items-center justify-center flex-col  bg-white h-full  shadow-xl rounded-lg py-8'>
                    <p className='font-semibold text-2xl '>Total item: {items.length}</p>
                    <p className='text-xl '>Total product: {totalProduct}</p>
                    <p className='text-xl '>Total sold: {totalSold}</p>
                </div>
                <div className=' bg-white h-full shadow-xl rounded-lg py-4  h-full'>
                    <h5 className='font-semibold text-2xl'>{"Product Available vs Sold"}</h5>
                    <ProductsPieCharts total={{ totalProduct, totalSold }}></ProductsPieCharts>
                </div>
            </div>
        </div>
    );
};

export default WarehouseAnalysis;