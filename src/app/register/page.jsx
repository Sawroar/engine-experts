'use client'
import Lottie from 'lottie-react'
import Image from 'next/image'
import registerLottieData from '../../../public/RegisterLottieData'
import RegisterForm from './components/RegisterForm'

export default function RegisterPage() {
    return (
        <div className='flex gap-2 items-center'>
            <div className='flex-1'>
                <Lottie className='w-3/4 p-4' animationData={registerLottieData}></Lottie>
            </div>
            <div className='flex-1'>
                <RegisterForm></RegisterForm>
            </div>
        </div>
    )
}
