import React, { useEffect } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [user] = useAuthState(auth)
    const [
        signInWithEmailAndPassword,
        u,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            console.log(user)
        }
    }, [user])
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

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;