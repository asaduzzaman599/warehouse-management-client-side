import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-slate-800'>
            <nav className=' mx-auto flex justify-between items-center py-6  container text-white'>
                <Link to="/">
                    <div className='text-white text-xl'>Store House Controller</div>
                </Link>

                <ul className='md:flex gap-5 no-underline'>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/manage'>Manage Items</NavLink></li>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/add'>Add Item</NavLink></li>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/myitems'>My items</NavLink></li>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/'>Logout</NavLink></li>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/login'>Login</NavLink></li>
                    <li className='text-sm hover:text-slate-400'><NavLink to='/register'>Register</NavLink></li>
                </ul>

            </nav>
        </header>
    );
};

export default Header;