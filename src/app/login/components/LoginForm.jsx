import React from 'react'
import {  signIn } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
export default  function LoginForm() {
    const router = useRouter()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
toast('Submiting.....')
        try {
       const response= await signIn("credentials",{email,password,callbackUrl:'/', redirect:false})
        console.log({ email, password })
        if(response.ok){
            toast.success('Logged In Successfully')
        router.push('/')
        form.reset()
        }
        else{
            toast.error('Failed to Log in Successfully')
        }
     } catch (error) {
        console.log(error)
        alert('Authentication Failed')
     }
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-3xl shrink-0 shadow-2xl ">
                        <div className="card-body p-8 w-full border-2">
                            <fieldset className="fieldset w-full">
                                <label className="label w-full">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
