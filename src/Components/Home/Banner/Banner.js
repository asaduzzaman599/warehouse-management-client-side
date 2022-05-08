import React from 'react';
import banner from './../../../images/banner.jpg'
const Banner = () => {
    return (
        <div className='w-full relative'>
            <img src={banner} className="w-full" alt="" />
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center '>
                <h1 className='text-4xl text-white font-bold'>Welcome to Store House Controller</h1>
                <p className='text-xl text-gray-300'>Help to Control inventories sales, purchases, deliveries, suppliers and maintain your warehouse smoothly. </p>

            </div>
        </div>
    );
};

export default Banner;