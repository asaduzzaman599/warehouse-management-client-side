import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-800'>
            <nav className=' mx-auto flex justify-between items-center py-6  container text-white'>
                <div className='text-white'>Store House Controller</div>

                <ul className='flex gap-5 no-underline'>
                    <li className='text-xs hover:text-slate-400'><NavLink to='/manage'>Manage Items</NavLink></li>
                    <li className='text-xs hover:text-slate-400'><NavLink to='/add'>Add Item</NavLink></li>
                    <li className='text-xs hover:text-slate-400'><NavLink to='/myitems'>My items</NavLink></li>
                    <li className='text-xs hover:text-slate-400'><NavLink to='/'>Logout</NavLink></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;