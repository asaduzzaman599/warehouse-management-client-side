import { MailIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';

const Contact = () => {
    return (
        <div >
            <div className='grid md:grid-cols-3 w-4/6  mx-auto my-10 gap-4'>
                <div className='flex flex-col  items-center justify-center gap-6 bg-white hover:shadow-xl shadow-md rounded-lg p-8'>
                    <PhoneIcon className="h-10 w-10 text-green-400" />
                    <p className='text-xl font-semibold text-gray-400'>+8801534681329</p>
                </div>
                <div className='flex flex-col  items-center justify-center gap-6 bg-white hover:shadow-xl shadow-md rounded-lg p-8'>
                    <MailIcon className="h-10 w-10 text-blue-400" />
                    <p className='text-xl font-semibold text-gray-400 break-all'>asaduzzamansoumit@gmail.com</p>
                </div>
                <div className='flex flex-col  items-center justify-center gap-6 bg-white hover:shadow-xl shadow-md rounded-lg p-8'>
                    <LocationMarkerIcon className="h-10 w-10 text-red-400" />
                    <p className='text-xl font-semibold text-gray-400 break-all'>Matikata,Dhaka -1206</p>
                </div>
            </div>
            <div className='w-5/6 md:w-4/6 mx-auto bg-slate-800 p-12 rounded-lg text-white my-14'>
                <h3 className='my-10 text-2xl font-medium '>Have Any Question</h3>
                <div className='flex flex-col gap-6 text-slate-800 text-xl'>
                    <input type="text" name="" id="" placeholder='Name' className='rounded-full px-6 py-4' />
                    <input type="email" name="" id="" placeholder='Email' className='rounded-full px-6 py-4' />
                    <textarea type="text" name="" id="" placeholder="What's on your mind!" className='rounded-full px-6 py-4' />
                    <button className='font-semibold py-8 px-4 border-2 border-white text-white  hover:text-slate-800 hover:bg-white duration-500'>Submit</button>

                </div>
            </div>
        </div>
    );
};

export default Contact;