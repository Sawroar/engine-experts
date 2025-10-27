'use client'
import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
export default function SocialLogin() {
    const session= useSession()
    const router =useRouter()
    const handleSocialLogin=async(providerName)=>{
        signIn(providerName)
    }
    useEffect(()=>{
        if(session.status=='authenticated'){
            router.push('/')
            toast.success('User Logged in Successfully')
        }
    },[session?.status])
  return (
    <div className='flex justify-center gap-3 '>
<div className='flex justify-around gap-2 items-center bg-amber-300 rounded-full md:px-4 md:py-2  px-1 py-1 cursor-pointer  hover:bg-[#ff3811] hover:scale-105 transform transition-all duration-500 ease-in-out'>
            <button type='submit' onClick={()=>handleSocialLogin('google')} className='md:text-3xl'><FcGoogle /> </button> 
            <p className='md:font-bold text-xs'>Log In With Google</p>
</div>
<div className='flex justify-around  gap-1 md:gap-2 items-center bg-amber-300 rounded-full md:px-4 md:py-2 px-1 py-1 cursor-pointer   hover:bg-[#ff3811]  hover:scale-105 transform transition-all duration-500 ease-in-out'>
 <p onClick={()=>handleSocialLogin('github')} className='text-2xl'> <VscGithub /></p>
     <p className='md:font-bold text-xs'>Log In With Github</p>
</div>
       
   </div>
  )
}
