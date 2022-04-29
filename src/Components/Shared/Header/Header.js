import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center'>
            <div>Store House Controller</div>

            <div className='flex gap-5'>
                <NavLink to='/'>Manage Items</NavLink>
                <NavLink to='/add'>Add Item</NavLink>
                <NavLink to='/'>My items</NavLink>
                <NavLink to='/'>Logout</NavLink>
            </div>

        </nav>
    );
};

export default Header;