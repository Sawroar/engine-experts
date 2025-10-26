import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/assets/icons/group.svg'
import image2 from '../../../public/assets/icons/deliveryt.svg'
import image3 from '../../../public/assets/icons/person.svg'
import image4 from '../../../public/assets/icons/Wrench.svg'
import image5 from '../../../public/assets/icons/check.svg'

export default function CoreFeatures() {
    return (
        <div>
            <div className='flex justify-center items-center mt-5 mb-5'>
                <div>
                    <h1 className='text-center text-[#ff3811] mb-5 font-bold'> Core Features</h1>
                    <h1 className='text-5xl text-center font-bold mb-5'>Why Choose Us</h1>
                    <p className='text-center text-[#737373] mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className=' flex flex-col sm:flex-row gap-7 justify-center items-center'>
              <div className='rounded-lg shadow-md overflow-hidden hover:shadow-xl  hover:bg-[#ff3811] hover:text-white transition-shadow duration-300 p-8'>
                  <Image src={image1} height={70} width={100} className='w-48 h-48 ' alt='image-1'></Image>
                  <p className='text-center font-semibold mt-2'>Expert Team</p>
              </div>
              <div className='rounded-lg shadow-md overflow-hidden hover:shadow-xl  hover:bg-[#ff3811] hover:text-white transition-shadow duration-300 p-8'>
                  <Image src={image2} height={70} width={100} className='w-48 h-48 ' alt='image-1'></Image>
                  <p className='text-center font-semibold mt-2'>Timely Delivery</p>
              </div>
              <div className='rounded-lg shadow-md overflow-hidden hover:shadow-xl  hover:bg-[#ff3811] hover:text-white transition-shadow duration-300 p-8'>
                  <Image src={image3} height={70} width={100} className='w-48 h-48  object-fill' alt='image-1'></Image>
                  <p className='text-center font-semibold mt-2'>24/7 Support</p>
              </div>
              <div className='rounded-lg shadow-md overflow-hidden hover:shadow-xl  hover:bg-[#ff3811] hover:text-white transition-shadow duration-300 p-8'>
                  <Image src={image4} height={70} width={100} className='w-48 h-48  object-fill' alt='image-1'></Image>
                  <p className='text-center font-semibold mt-2'>100% Guranty</p>
              </div>
              <div className='rounded-lg shadow-md overflow-hidden hover:shadow-xl  hover:bg-[#ff3811] hover:text-white transition-shadow duration-300 p-8'>
                  <Image src={image5} height={70} width={100} className='w-48 h-48 object-fill' alt='image-1'></Image>
                  <p className='text-center font-semibold mt-2'> Best Equipment</p>
              </div>
               
            </div>
        </div>
    )
}
