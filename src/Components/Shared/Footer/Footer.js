import React from 'react';

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <footer className='p-8  bg-slate-800'>
            <small className='text-sm text-white'>copyright &copy;{year}</small>
        </footer>
    );
};

export default Footer;