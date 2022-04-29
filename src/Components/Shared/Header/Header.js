import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <header className='bg-slate-800'>
            <nav className=' mx-auto flex justify-between items-center py-6  container text-white'>
                <Link to="/">
                    <div className='text-white text-xl'>Store House Controller</div>
                </Link>

                <ul className='md:flex gap-5 no-underline'>
                    {
                        user ?
                            <>
                                <li className='text-sm hover:text-slate-400'><NavLink to='/manage'>Manage Items</NavLink></li>
                                <li className='text-sm hover:text-slate-400'><NavLink to='/add'>Add Item</NavLink></li>
                                <li className='text-sm hover:text-slate-400'><NavLink to='/myitems'>My items</NavLink></li>
                                <li className='text-sm hover:text-slate-400'><button onClick={() => signOut(auth)}>Logout</button></li>
                            </> :
                            <>
                                <li className='text-sm hover:text-slate-400'><NavLink to='/login'>Login</NavLink></li>
                                <li className='text-sm hover:text-slate-400'><NavLink to='/register'>Register</NavLink></li>
                            </>
                    }
                </ul>

            </nav>
        </header>
    );
};

export default Header;