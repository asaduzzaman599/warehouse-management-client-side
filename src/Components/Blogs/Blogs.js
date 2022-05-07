import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>Difference between javascript and nodejs</h3>
                <p className='text-left mt-2'>
                    <li>Javascript is a programming language but asynchronous event-driven JavaScript runtime  with some libraries.</li>
                    <li>Javascript normally used in frontend development but NodeJs used in in server-side development.</li>
                    <li>Javascript normally can be run with any client side browser but NodeJs in server-side need V8 enginee to run.</li>
                    <li>Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.</li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>When should you use nodejs and when should you use mongodb?</h3>
                <p className='text-left  mt-2'>
                    <li>NodeJS: if our application need to handle heavy amount of user then we can use nodejs. Also for network heavy or I/O intensive heavy application we can use nodejs. Realtime activities and fast and quick communication can be done with nodejs.</li>
                    <li>MongoDB: </li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>Differences between sql and nosql databases.</h3>
                <p className='text-left  mt-2'>
                    <li>SQL database is structured with property everyting is finallized but nosql is flexible we can add or remove property any time dynamic</li>
                    <li>SQL  is relational databased system but nosql is non-relational databased system</li>
                    <li>In sql all data stored as record but in nosql data stored as collection.</li>
                    <li> sql vertically Scalable but nosql	Horizontally scalableall.</li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>What is the purpose of jwt and how does it work?</h3>
                <p className='text-left  mt-2'>
                    every loggedin user of application is authenticated but not authorised and server can't give protacted data to user without authorization. to authorised the user every time agter login server give an unique token to user which is encoded json object. for protacted data logged user need to sent requset along with the token to server side. after receive the request server side verified the token if verified succesfully then allow to pass protacted data as response.
                </p>
            </div>
        </div>
    );
};

export default Blogs;