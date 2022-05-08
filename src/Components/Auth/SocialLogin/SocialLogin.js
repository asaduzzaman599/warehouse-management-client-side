import React, { useEffect } from 'react';
import google from './../../../images/logos/google-logopng.png'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = ({ from = '/' }) => {

    //firebase hook
    const [signInWithGoogle, u, loading, error] = useSignInWithGoogle(auth);

    const googleLogin = () => {
        signInWithGoogle()
    }

    return (
        <div className='w-full'>
            <div className='flex items-center my-6'>
                <div className='w-4/5 border-b-2 h-0 border-gray-300 mr-8'></div>
                or
                <div className='w-4/5 border-b-2  h-0 border-gray-300 ml-8'></div>
            </div>
            <button onClick={googleLogin} className='border-2 border-gray-400 rounded w-full py-2 px-8 flex justify-center items-center gap-4 font-semibold'>
                <img src={google} className="w-8 " alt="" /> Continue with Google</button>
        </div>
    );
};

export default SocialLogin;