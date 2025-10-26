'use client'
import login from '../../../public/Login'
import Lottie from 'lottie-react'
import LoginForm from './components/LoginForm'
export default function Login() {
  return (

    <div className=' flex flex-col sm:flex-row justify-between items-center min-h-screen'>
      <div className='flex-1'>
        <Lottie className='w-full  p-4' animationData={login}></Lottie>
      </div>
      <div className='flex-1'>
        <LoginForm></LoginForm>

      </div>
    </div>
   
  )
}
