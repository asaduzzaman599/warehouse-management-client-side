import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [user] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        u,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (user) {
        console.log(user)
    }
    const [formError, setFormError] = useState({ nameError: "", emailError: "", passwordError: "", confirmPasswordError: "" })


    const handleForm = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        if (!name) {
            return
        } if (!email) {
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
    return (
        <div className='bg-blue-500 '>
            <div className='w-2/4 mr-auto min-h-screen bg-white  p-8 rounded-lg'>
                <h3>Register</h3>
                <form onSubmit={handleForm} >
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