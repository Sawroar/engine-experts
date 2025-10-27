import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/Ellipse.png'
import image2 from '../../../public/Ellipse-1.png'
import image3 from '../../../public/assets/icons/quote.svg'
import { MdOutlineStarPurple500 } from 'react-icons/md'
export default function Testimonials() {
    return (
        <div>
            <div className='flex justify-center items-center mt-5 mb-10'>
                <div>
                    <h1 className='text-center text-[#ff3811] mb-5'> Testimonial</h1>
                    <h1 className='text-5xl text-center font-bold mb-5'>What Customer Says</h1>
                    <p className='text-center text-[#737373] mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-around mt-8 gap-6 p-8'>
                <div className=' rounded-lg shadow-md overflow-hidden hover:shadow-xl  p-8 hover:scale-105 transform transition-all duration-500 ease-in-out'>
                    <div className='flex justify-between '>
                        <div className='flex gap-4'>
                            <Image  src={image1} height={60} width={80} alt='image-1'></Image>
                            <div>
                                <h1 className='font-bold md:text-5xl'>Awlad Hossain</h1>
                                <p className='font-semibold text-xl'>Businessman</p>
                            </div>
                        </div>
                        <Image src={image3} height={60} width={60} className='text-[#FF3811] md:w-16 md:h-16 w-10' alt='image-1'></Image>
                    </div>
                    <p className='text-[#737373] mt-3'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
                    <div className='flex'>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                    </div>
                </div>
                <div className=' rounded-lg shadow-md overflow-hidden hover:shadow-xl p-8 hover:scale-105 transform transition-all duration-500 ease-in-out'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <Image src={image2} height={60} width={80} alt='image-1'></Image>
                            <div>
                                <h1 className='font-bold md:text-5xl'>Irfan Hossain</h1>
                                <p className='font-semibold text-xl'>Businessman</p>
                            </div>
                        </div>
                        <Image src={image3} height={60} width={60} className='text-[#FF3811] md:w-16 md:h-16 w-10' alt='image-1'></Image>
                    </div>
                    <p className='text-[#737373] mt-3'>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
                    <div className='flex mt-2'>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                        <p className='text-[#FF912C] text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
