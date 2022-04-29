import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import Item from '../../Shared/Item/Item';

const InventoryItems = () => {
    const [items, setItems] = useItems(6)


    return (
        <div className='container mx-auto'>
            <h3>invetory items : {items.length}</h3>

            <div className='grid grid-cols-3 gap-10'>
                {
                    items.map(item => <Item key={item._id}
                        item={item}>
                        <Link to={`inventory/${item._id}`}>Update Stock</Link>
                    </Item>)
                }
            </div>
        </div>
    );
};

export default InventoryItems;