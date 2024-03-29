import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-8'>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>Difference between javascript and nodejs</h3>
                <p className='text-left mt-2'>
                    <li>Javascript is a programming language but nodejs asynchronous event-driven JavaScript runtime  with some libraries.</li>
                    <li>Javascript normally used in frontend development but NodeJs used in server-side development.</li>
                    <li>Javascript normally can be run with any client side browser but NodeJs in server-side need V8 enginee to run.</li>
                    <li>Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.</li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>When should you use nodejs and when should you use mongodb?</h3>
                <p className='text-left  mt-2'>
                    <li>NodeJS: if our application need to handle heavy amount of user then we can use nodejs. Also for network heavy or I/O intensive heavy application we can use nodejs. Realtime activities and fast and quick communication can be done with nodejs.</li>
                    <li>MongoDB:  for unstructured data  store  mongodb is flexible. For Fast data proccessing speed. when data format is similer as json object  then we should use mongodb . </li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>Differences between sql and nosql databases.</h3>
                <p className='text-left  mt-2'>
                    <li>SQL database is structured with property everyting is finallized but nosql is flexible we can add or remove property any time dynamic</li>
                    <li>SQL need query language but nosql work with method with perameter.</li>
                    <li>SQL  is relational databased system but nosql is non-relational databased system</li>
                    <li>In sql all data stored as record but in nosql data stored as collection.</li>
                    <li> SQL vertically Scalable but nosql	Horizontally scalable.</li>
                </p>
            </div>
            <div className='w-4/5 mx-auto p-6 mb-6 shadow bg-white'>
                <h3 className='font-semibold'>What is the purpose of jwt and how does it work?</h3>
                <p className='text-left  mt-2'>
                    Every loggedin user of application is authenticated but not authorised and server can't give protacted data to user without authorization. to authorised the user every time after login server give an unique access token to user which is encoded json object. For protacted data logged user need to sent requset along with the stored access token to server side. after receive the request server side verified the token if verified succesfully then allow to pass protacted data as response.
                </p>
            </div>
        </div>
    );
};

export default Blogs;