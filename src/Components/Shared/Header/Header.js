import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)
    //menu opn close state
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='bg-slate-800 sticky top-0 z-10'>
            <nav className=' mx-auto md:flex justify-between items-center py-2  container text-white gap-10 relative'>
                <div className='flex items-center justify-between px-4'>
                    <Link to="/">
                        <div className='text-white text-xl'>Store House Controller</div>
                    </Link>
                    <div className='md:hidden'>

                        {isOpen ? <XIcon onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 text-white mx-auto " /> : <MenuIcon onClick={() => setIsOpen(!isOpen)} className="h-8 w-8 text-white mx-auto " />}
                    </div>
                </div>
                <div className={`flex flex-col md:flex-row py-4  items-center justify-between  md:grow absolute md:static w-full md:w-auto bg-slate-800 ${isOpen ? "top-10" : "top-[-250px]"}`}>
                    <ul className='md:flex gap-5 no-underline  '>

                        <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/'>Home</NavLink></li>
                        {
                            user ?
                                <>
                                    <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/manage'>Manage Items</NavLink></li>
                                    <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/add'>Add Item</NavLink></li>
                                    <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/myitems'>My items</NavLink></li>

                                </> :
                                <>
                                </>
                        }

                        <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/contact'>Contact</NavLink></li>
                        <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>

                    <ul className='md:flex gap-5 no-underline  '>
                        {
                            user ?
                                <>
                                    <li className='text-sm hover:text-slate-400 mt-2'><button onClick={() => signOut(auth)}>Logout</button></li>
                                </> :
                                <>
                                    <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/login'>Login</NavLink></li>
                                    <li className='text-sm hover:text-slate-400 mt-2'><NavLink to='/register'>Register</NavLink></li>
                                </>
                        }
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Header;