import React from 'react';
import google from './../../../images/logos/google-logopng.png'
const SocialLogin = () => {
    const googleLogin = () => {

    }
    return (
        <div className='w-full'>
            <div className='flex items-center'>
                <div className='w-4/5 border-2 h-0 border-gray-300 mr-8'></div>
                or
                <div className='w-4/5 border-2  h-0 border-gray-300 ml-8'></div>
            </div>
            <button onClick={googleLogin} className='border-2 border-gray-500 rounded w-full py-4 px-8 flex justify-center items-center '>
                <img src={google} className="w-8" alt="" /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;