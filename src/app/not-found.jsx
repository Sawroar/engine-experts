import Image from 'next/image'
import React from 'react'
import image from '../../public/404.png'
import Link from 'next/link'
export default function notFound() {
  return (
    <div className=' mt-6'>
    <div className='flex items-center justify-center min-h-screen'>
      <Image src={image} height={400} width={600} alt='not-found'></Image>

    </div>
<p className='text-center mt-1 text-blue-500 underline font-bold'>    <Link href={'/'}>Go Back to Home</Link></p>
    </div>
  )
}
