import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../images/logos/logo.png'
const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='p-8  bg-slate-800 '>
            <div className='container mx-auto grid md:grid-cols-5 text-white'>
                <div className='md:col-span-3'>
                    <Link to="/" className='flex gap-2 items-center justify-center md:justify-start'>
                        <img src={logo} className='w-12 h-12' alt="" />
                        <span className='text-xl'>Store House Controller</span>
                    </Link>
                </div>
                <div className='md:col-span-1'>

                </div>
                <div className='md:col-span-1'>
                    <h3 className='font-semibold '>Contact</h3>
                    <p className='text-gray-400'>Phone: +8801534681329</p>
                    <p className='text-gray-400'>Office: Matikata,Dhaka</p>
                </div>


            </div>
            <small className='text-sm text-gray-600'>copyright &copy;{year}</small>
        </footer>
    );
};

export default Footer;