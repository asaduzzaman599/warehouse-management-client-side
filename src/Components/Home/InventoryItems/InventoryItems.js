import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../../Shared/Item/Item';

const InventoryItems = () => {
    const [items, setItems] = useItems(6)


    return (
        <div className='container mx-auto my-8'>
            <h3 className='my-10 text-2xl font-medium'>invetory Section </h3>

            <div className='grid grid-cols-3 gap-10'>
                {
                    items.map(item => <Item key={item._id}
                        item={item}>
                        <Link to={`inventory/${item._id}`}>Update Stock</Link>
                    </Item>)
                }
            </div>
            <Link to="/manage" className='inline-block mt-8 py-4 px-8 font-medium text-slate-600 bg-slate-400 cursor-pointer hover:text-white hover:bg-slate-800 rounded duration-500' >Manage Inventories</Link>
        </div>
    );
};

export default InventoryItems;