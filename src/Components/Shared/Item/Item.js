import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, children }) => {
    const { _id, name, description, quantity, price, image, supplier } = item;
    return (
        <div className='bg-white rounded shadow-lg flex flex-col md:flex-row  justify-between relative p-4'>
            <img src={image} className='h-50 w-2/4 mx-auto' alt="" />
            <div className='p-8 text-right flex flex-col gap-2 items-end justify-between'>
                <div>
                    <h3 className='text-xl font-semibold'>{name} </h3>
                    <p className='text-sm text-gray-500 text-center'>{description}</p>
                    <p><span className='font-semibold'>Supplier :</span>  {supplier}</p>
                    <p><span className='font-semibold'>Quantity:</span> {quantity > 0 ? quantity : "Out of stock"} piece </p>
                    <p><span className='font-semibold'>${price}</span> per piece</p>
                </div>
                {
                    children
                }
            </div>
        </div>
    );
};

export default Item;