import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, children }) => {
    const { _id, name, description, quantity, price, image, supplier } = item;
    return (

        <div className='bg-white rounded shadow-lg  relative p-4 flex flex-col justify-between'>

            <h3 className='text-xl font-semibold mb-6'>{name} </h3>
            <div className='grid  md:grid-cols-2 '>
                <div className='  w-full'>
                    <img src={image} className='  mx-auto' alt="" />
                </div>
                <div className='p-8 text-right flex flex-col gap-2 justify-between  w-full'>
                    <hr className='pt-2' />
                    <p className='text-sm text-gray-500 text-center p-2'>{description}</p>
                    <hr className='pb-4' />
                    <div className=' w-full'>


                        <p><span className='font-semibold'>Supplier :</span>  {supplier}</p>
                        <p><span className='font-semibold'>Quantity:</span> {quantity > 0 ? quantity : "Out of stock"} piece </p>
                        <p><span className='font-semibold'>${price}</span> per piece</p>
                    </div>
                    {
                        children
                    }
                </div>
            </div>

        </div>
    );
};

export default Item;