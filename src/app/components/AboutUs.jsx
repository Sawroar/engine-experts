import React from 'react'
import Image1 from '../../../public/assets/images/about_us/person.jpg'
import Image2 from '../../../public/assets/images/about_us/parts.jpg'
import Image from 'next/image'
export default function AboutUs() {
  return (
    <div className='p-10 flex md:flex-row justify-between flex-col'>
        <div> 
            <div className='absolute'>
                <Image src={Image1} height={473} width={460} alt='about-us' className='rounded-2xl'></Image>
                <div className='relative -translate-y-48 translate-x-48'>
                      <Image src={Image2} height={332} width={327} alt='about-us' className='rounded-2xl border-white'></Image>
                </div>
                </div>
                </div>
        <div>
            <h1 className='text-2xl text-orange-600 font-bold'>About Us</h1>
            <h1  className='mb-4 text-3xl font-bold'>We are qualified & of experience in this field</h1>
            <p className='mb-4'>There are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered alteration in some <br /> form,  by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
       <p  className='mb-4'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p> 
  <button className='btn rounded border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white content-center'> Get More Info</button>
        </div>
    </div>
  )
}
