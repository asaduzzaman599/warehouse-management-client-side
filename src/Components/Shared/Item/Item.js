import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item, children }) => {
    const { _id, name, description, quantity, price, image, supplier } = item;
    return (
        <div className='bg-white rounded shadow-lg flex flex-col justify-between'>
            <img src={image} className='h-50 mx-auto' alt="" />
            <div className='p-8 text-right'>
                <h3>{name} ({quantity > 0 ? quantity : "Out of stock"})</h3>
                <p>{description}</p>
                <p>Supplier : {supplier}</p>
                <p>${price}</p>
                {
                    children
                }
            </div>
        </div>
    );
};

export default Item;