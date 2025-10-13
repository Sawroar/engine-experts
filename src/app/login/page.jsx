'use client'
import login from '../../../public/Login'
import Lottie from 'lottie-react'
import LoginForm from './components/LoginForm'
export default function Login() {
  return (
        <div className='flex gap-2 items-center'>
            <div className='flex-1'>
                <Lottie className='w-3/4 p-4' animationData={login}></Lottie>
            </div>
            <div className='flex-1'>
         <LoginForm></LoginForm>
         <h1>Hello!</h1>
            </div>
        </div>
  )
}
