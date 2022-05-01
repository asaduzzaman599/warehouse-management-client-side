import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [user] = useAuthState(auth)
    const [createUserWithEmailAndPassword, u, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const navigate = useNavigate()

    const [token] = useToken(user)
    const from = '/'
    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token])

    const [formError, setFormError] = useState({ nameError: "", emailError: "", passwordError: "", confirmPasswordError: "" })



    const handleForm = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        if (!name) {
            return
        } if (!(/^\S+@\S+\.\S+$/).test(email)) {
            return
        }
        if (!password || password.length < 6) {
            return
        } if (password !== confirmPassword) {
            return
        }

        console.log(name, email, password)
        createUserWithEmailAndPassword(email, password)
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-blue-500 '>
            <div className='md:w-2/4 mr-auto min-h-screen bg-white  p-8 rounded-lg'>
                <h3 className='my-10 text-2xl font-medium'>Register</h3>
                <form onSubmit={handleForm} >
                    <div>

                        <input type="text" className='border-2 border-gray-200 w-full mb-2 rounded ' name="name" id="name" placeholder='Your Name' />
                    </div>
                    <div>
                        <input type="email" className='border-2 border-gray-200 w-full mb-2 rounded ' name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div>
                        <input type="password" className='border-2 border-gray-200 w-full mb-2 rounded ' name="password" id="password" placeholder='Your Password' />
                    </div>
                    <div>
                        <input type="password" className='border-2 border-gray-200 w-full mb-2 rounded ' name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
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