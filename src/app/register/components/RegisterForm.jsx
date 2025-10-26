'use client'
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/components/SocialLogin';
import Link from 'next/link';
import React from 'react'
export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full p-4 hover:scale-105 transform transition-all duration-500 ease-in-out">
                <div className="hero-content flex-col ">
                                  <div className="card bg-base-100 w-full max-w-lg shadow-2xl ">
                                           
                        <div className="card-body p-8 w-full">
                                       <h1 className="text-5xl font-bold text-center">Register now!</h1>
                            <fieldset className="fieldset w-full">
                                <label className="label w-full">Name</label>
                                <input type="text" name='name' className="input w-full" placeholder="Name" />
                                <label className="label w-full">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <button type='submit' className="text-white bg-amber-500  hover:bg-[#ff3811] rounded-2xl btn w-full hover:scale-105 transform transition-all duration-500 ease-in-out ">Register</button>
                            </fieldset>
                            <SocialLogin></SocialLogin>
                            <p className='text-center'>Already have an account? <Link className='text-[#ff3811]' href={'/login'}>Log Now!</Link> </p>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    )
}
