'use client'
import { registerUser } from '@/app/actions/auth/registerUser';
import SocialLogin from '@/app/components/SocialLogin';
import React from 'react'
export default function RegisterForm() {
    const handleSubmit=async(e)=>{
        e.preventDefault()
const form = e.target;
const name=form.name.value;
const email=form.email.value;
const password=form.password.value;
await registerUser({name,email,password})
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl ">
                    <div className="card-body p-8 w-full border-2">
                        <fieldset className="fieldset w-full">
                            <label className="label w-full">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Name" />
                            <label className="label w-full">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                                   
                       
                        </fieldset>
                         <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

        </form>
    )
}
