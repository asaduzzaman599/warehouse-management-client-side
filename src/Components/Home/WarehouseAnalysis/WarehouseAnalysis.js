import React from 'react';
import ProductsPieCharts from '../ProductsPieChart/ProductsPieCharts';
const WarehouseAnalysis = ({ items }) => {
    let availableTotalProduct = 0;
    let totalSold = 0;

    //add total quantity and sold of all items
    items.forEach(item => {
        availableTotalProduct = availableTotalProduct + item.quantity
        totalSold = totalSold + item.sold;
    });
    return (
        <div className=' md:w-4/5 mx-auto  py-6 px-10 my-6'>
            <h3 className='my-10 text-3xl font-semibold'>Warehouse Analysis</h3>
            <div className=' grid md:grid-cols-4  w-full gap-10 mb-8'>
                <div className='   bg-blue-400 text-white   shadow-xl rounded-lg py-16'>
                    <p className='flex flex-col items-center justify-center font-semibold text-2xl '>Total item <span>{items.length}</span></p>
                </div>
                <div className='   bg-indigo-500 text-white   shadow-xl rounded-lg py-16'>
                    <p className='flex flex-col items-center justify-center font-semibold text-2xl '>Total product <span>{availableTotalProduct + totalSold}</span></p>

                </div>
                <div className='   bg-yellow-500 text-white   shadow-xl rounded-lg py-16'>
                    <p className='flex flex-col items-center justify-center font-semibold text-2xl '>Available product  <span>{availableTotalProduct}</span></p>
                </div>
                <div className='   bg-green-400 text-white   shadow-xl rounded-lg py-16'>

                    <p className='flex flex-col items-center justify-center font-semibold text-2xl '>Total sold  <span>{totalSold} </span></p>
                </div>
            </div>
            <div className=' bg-red-100  shadow-xl rounded-lg py-16  w-full overflow-hidden'>
                {/* Chart section */}
                <h5 className='font-semibold text-2xl'>Total Purchase</h5>
                <ProductsPieCharts total={{ totalProduct: availableTotalProduct, totalSold }}></ProductsPieCharts>
            </div>

        </div>
    );
};

export default WarehouseAnalysis;