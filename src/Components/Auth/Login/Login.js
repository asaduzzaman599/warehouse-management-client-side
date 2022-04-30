import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [user] = useAuthState(auth)
    const [
        signInWithEmailAndPassword, u, loading, error,] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user)

    const location = useLocation()
    const navigate = useNavigate()
    const from = location?.state?.from?.pathname || '/'

    useEffect(() => {
        if (token) {
            console.log(token)
            navigate(from, { replace: true })
        }
    }, [token])
    const handleForm = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)


    }
    return (
        <div className='bg-blue-500'>
            <div className='w-2/4 ml-auto min-h-full bg-white p-8  min-h-screen rounded-lg'>
                <h3>Login</h3>
                <form onSubmit={handleForm}>
                    <div>
                        <input type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder='Your Password' />
                    </div>
                    <input type="submit" value="LogIn" />
                </form>

                <SocialLogin from={from}></SocialLogin>
            </div>
        </div>
    );
};

export default Login;