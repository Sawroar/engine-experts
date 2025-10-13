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
    <div className='flex justify-center '>
        <p onClick={()=>handleSocialLogin('google')} className='text-3xl bg-slate-50 rounded'><FcGoogle /></p>
        <p onClick={()=>handleSocialLogin('github')} className='text-3xl bg-slate-50 rounded'> <VscGithub /></p>
   </div>
  )
}
