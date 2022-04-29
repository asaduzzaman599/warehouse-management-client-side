import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const handleForm = (event) => {
        event.preventDefault()

    }
    return (
        <div className='bg-blue-500 '>
            <div className='w-2/4 mr-auto min-h-screen bg-white  p-8 rounded-lg'>
                <h3>Register</h3>
                <form action="">
                    <div>

                        <input type="text" name="name" id="name" placeholder='Your Name' />
                    </div>
                    <div>
                        <input type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder='Your Password' />
                    </div>
                    <div>
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                    </div>



                    <input type="submit" value="Register" />
                </form>

                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;