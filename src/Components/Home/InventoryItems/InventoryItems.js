import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../../Shared/Item/Item';
import { ArrowRightIcon } from '@heroicons/react/solid'
const InventoryItems = () => {
    const [items, setItems] = useItems(6)


    return (
        <div className='w-4/5  mx-auto my-8'>
            <h3 className='my-10 text-2xl font-medium'>Invetory Section </h3>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <Item key={item._id}
                        item={item}>
                        <Link to={`inventory/${item._id}`} className='inline-block py-2  bg-slate-700 text-white font-medium rounded-full border-2 border-slate-700  hover:underline duration-500 flex items-center justify-center gap-4 w-full'>Update Stock <ArrowRightIcon className="h-5 w-5 text-white" /></Link>

                    </Item>)
                }
            </div>
            <Link to="/manage" className='inline-block mt-8 py-4 px-8 font-medium text-slate-600 bg-slate-400 cursor-pointer hover:text-white hover:bg-slate-800 rounded duration-500' >Manage Inventories</Link>
        </div>
    );
};

export default InventoryItems;