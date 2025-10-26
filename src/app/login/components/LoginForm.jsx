import React from 'react'
import { signIn } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
export default function LoginForm() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast('Submiting.....')
        try {
            const response = await signIn("credentials", { email, password, callbackUrl: '/', redirect: false })
            console.log({ email, password })
            if (response.ok) {
                toast.success('Logged In Successfully')
                router.push('/')
                form.reset()
            }
            else {
                toast.error('Failed to Log in Successfully')
            }
        } catch (error) {
            console.log(error)
            alert('Authentication Failed')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="w-full p-4 hover:scale-105 transform transition-all duration-500 ease-in-out">
                <div className="hero-content flex-col ">
                    <div className="card w-full max-w-lg p-4 shadow-2xl ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl text-center font-bold">Login now!</h1>
                        </div>
                        <div className="card-body p-8 w-full ">
                            <fieldset className="fieldset w-full">
                                <label className="label w-full">Email</label>
                                <input type="email" name='email' className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input w-full" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button type='submit' className="text-white bg-amber-500  hover:bg-[#ff3811] rounded-2xl btn w-full hover:scale-105 transform transition-all duration-500 ease-in-out ">Login</button>
                            </fieldset>
                            <p className='text-center'>Don't have an account? <Link className='text-[#ff3811]' href={'/register'}>Register Now!</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
