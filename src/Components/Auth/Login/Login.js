import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from './../../Shared/Loading/Loading'

const Login = () => {
    const [user] = useAuthState(auth)
    const [signInWithEmailAndPassword, u, loading, hookError,] = useSignInWithEmailAndPassword(auth);

    console.log(loading)
    //password reset hook
    const [sendPasswordResetEmail, sending, resetPasswordError] = useSendPasswordResetEmail(auth);

    //access token
    const [token] = useToken(user)

    const [email, setEmail] = useState('')
    //error
    const [error, setError] = useState('')

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token])

    useEffect(() => {
        if (hookError) {
            console.log(hookError.message)
            switch (hookError.message) {
                case 'Firebase: Error (auth/user-not-found).':
                    toast.error("User not Found")
                    break;
                case 'Firebase: Error (auth/wrong-password).':
                    toast.error("Wrong email or password")
                    break;
                default:
                    toast.error("Something went wrong")
                    // code block
                    break;
            }
        }
    }, [hookError])
    const handleForm = (event) => {
        event.preventDefault()
        setError('')

        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)


    }

    const resetPassword = async () => {
        setError('')
        if (!email) {
            return setError('Please enter your email')
        }
        if (!(/^\S+@\S+\.\S+$/).test(email)) {

            return setError('Invalid email')
        }
        await sendPasswordResetEmail(email)
        toast('Password reset mail sent')
    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='bg-blue-500'>
            <div className='md:w-2/4 ml-auto min-h-full bg-white p-8  min-h-screen rounded-lg'>
                <h3 className='my-10 text-2xl font-medium'>Login</h3>
                <form onSubmit={handleForm}>
                    <div className=' mb-2 '>
                        <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} id="email" className='border-2 border-gray-200 w-full rounded ' placeholder='Your Email' />
                        <p className='text-left text-red-600 text-sm'>{error}</p>
                    </div>
                    <div>
                        <input type="password" name="password" className='border-2 border-gray-200 w-full mb-2 rounded ' id="password" placeholder='Your Password' />
                    </div>
                    <input type="submit" value="LogIn" className='py-4 px-8 font-medium text-white  bg-slate-800 cursor-pointer hover:text-white hover:bg-slate-800 rounded duration-500' />

                    <p className='my-4'>
                        Don't have account? <Link to="/register" className=' text-blue-500 hover:underline ' >Please Register</Link></p>

                </form>
                <div className='text-right'>
                    <button onClick={resetPassword} className=' text-blue-500 hover:underline ' type=''>forget password?</button>
                </div>

                <SocialLogin from={from}></SocialLogin>
            </div>
        </div>
    );
};

export default Login;