import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const handleForm = (event) => {
        event.preventDefault()

    }
    return (
        <div className='bg-blue-500'>
            <div className='w-2/4 ml-auto min-h-full bg-white p-8  min-h-screen rounded-lg'>
                <h3>Login</h3>
                <form action="">
                    <div>
                        <input type="email" name="email" id="" placeholder='Your Email' />
                    </div>
                    <div>
                        <input type="password" name="password" id="" placeholder='Your Password' />
                    </div>
                    <input type="submit" value="LogIn" />
                </form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;