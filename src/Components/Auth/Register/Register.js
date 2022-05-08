import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [user] = useAuthState(auth)
    const [createUserWithEmailAndPassword, u, loading, hookerror,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()

    const [token] = useToken(user)
    const from = '/'
    useEffect(() => {
        if (token) {

            toast.success("User Created Successfully")
            navigate(from, { replace: true })
        }
    }, [token])

    const [formError, setFormError] = useState({ nameError: "", emailError: "", passwordError: "", confirmPasswordError: "" })

    //displayed hook error with toast
    useEffect(() => {
        if (hookerror) {
            //showing toast based on error
            switch (hookerror.message) {
                case 'Firebase: Error (auth/email-already-in-use).':
                    toast.error("User already exist")
                    break;

                default:
                    toast.error("Something went Wrong")
                    break;
            }
        }
    }, [hookerror])


    const handleForm = async (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value
        setFormError({ nameError: "", emailError: "", passwordError: "", confirmPasswordError: "" })
        //checking all input field if alright then pass data for register
        if (!name) {
            return setFormError({ nameError: 'Empty input filled ' })
        } if (!(/^\S+@\S+\.\S+$/).test(email)) {
            return setFormError({ emailError: 'Invalid email' })
        }
        if (!password || password.length < 6) {
            return setFormError({ passwordError: 'Password length not less then 6' })
        } if (password !== confirmPassword) {
            return setFormError({ confirmPasswordError: 'Password not matched' })
        }

        await createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className=' '>
            <div className='md:w-2/4 mx-auto min-h-screen bg-white  p-8 rounded-lg shadow-lg my-10'>
                <h3 className='my-10 text-2xl font-medium'>Register</h3>
                <form onSubmit={handleForm} >
                    <div className='text-left pl-4 mb-2'>
                        <input type="text" className='border-2 border-gray-200 w-full mb-2 rounded ' name="name" id="name" placeholder='Your Name' required />
                        <p className='text-red-600 text-sm'>{formError.nameError}</p>
                    </div>
                    <div className='text-left pl-4 mb-2'>
                        <input type="email" className='border-2 border-gray-200 w-full mb-2 rounded ' name="email" id="email" placeholder='Your Email' required />
                        <p className='text-red-600 text-sm'>{formError.emailError}</p>
                    </div>
                    <div className='text-left pl-4 mb-2'>
                        <input type="password" className='border-2 border-gray-200 w-full mb-2 rounded ' name="password" id="password" placeholder='Your Password' required />
                        <p className='text-red-600 text-sm'>{formError.passwordError}</p>
                    </div>
                    <div className='text-left pl-4 mb-2'>
                        <input type="password" className='border-2 border-gray-200 w-full mb-2 rounded ' name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                        <p className='text-red-600 text-sm'>{formError.confirmPasswordError}</p>
                    </div>


                    <input type="submit" value="Register" className='py-4 px-8 font-medium text-white  bg-slate-800 cursor-pointer hover:text-white hover:bg-slate-800 rounded duration-500' />

                    <p className='mt-4'>
                        Already have an account? <Link to="/login" className=' text-blue-500 hover:underline' >Please login</Link></p>

                </form>

                <SocialLogin from={from}></SocialLogin>
            </div>
        </div>
    );
};

export default Register;