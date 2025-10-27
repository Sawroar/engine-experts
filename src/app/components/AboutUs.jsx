import React from 'react'
import Image1 from '../../../public/assets/images/about_us/person.jpg'
import Image2 from '../../../public/assets/images/about_us/parts.jpg'
import Image from 'next/image'
export default function AboutUs() {
  return (
    <div className='p-10 flex flex-col md:flex-row justify-around md:justify-between md:gap-18 mb-18 '>
      <div className='relative w-full md:w-1/2 h-96 md:h-auto  md:mb-0'>
        <div className='relative'>
          <Image src={Image1} height={473} width={460} alt='about-us' className='rounded-2xl w-full'></Image>
          <div className='absolute -bottom-40 right-0 md:bottom-[-50px] md:right-[-50px]'>
            <Image src={Image2} height={332} width={327} alt='about-us' className='rounded-2xl md:w-full border-8 border-white shadow-xl'></Image>
          </div>
        </div>
      </div>
      <div className='w-full md:w-1/2 md:pl-8'>
        <h1 className='text-2xl text-orange-600 font-bold mb-4'>About Us</h1>
        <h1 className='mb-4 text-3xl font-bold'>We are qualified & of experience in this field</h1>
        <p className='mb-4 text-gray-600'>There are many variations of passages of Lorem Ipsum available,<br /> but the majority have suffered alteration in some <br /> form,  by injected humour, or randomised words which don't <br /> look even slightly believable. </p>
        <p className='mb-4 text-gray-600'>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
        <button className='px-6 py-3 rounded border-2 border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white transition-colors duration-300'> Get More Info</button>
      </div>
    </div>
  )
}
