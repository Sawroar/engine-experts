import Image from 'next/image'
import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";
import image1 from '../../../public/assets/images/products/1.png'
import image2 from '../../../public/assets/images/products/2.png'
import image3 from '../../../public/assets/images/products/3.png'
import image4 from '../../../public/assets/images/products/4.png'
import image5 from '../../../public/assets/images/products/5.png'
import image6 from '../../../public/assets/images/products/6.png'
export default function PopularProducts() {
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <div>
                    <h1 className='text-center text-[#ff3811] mb-5'>Popular Products</h1>
                    <h1 className='text-5xl text-center font-bold mb-5'>Browse Our Products</h1>
                    <p className='text-center text-[#737373] mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>
         <div className='flex items-center justify-center'>
               <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12'>
      <div className=' w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56' src={image1} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-2xl font-bold'>Car Engine Brake</h1>
                            <p className='text-2xl font-semibold text-[#ff3811] '>$20.00</p>
                        </div>
                    </div>
                </div>
     <div className='w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56' src={image2} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-3xl font-bold'>Car Suspenstion</h1>
                            <p className='text-2xl font-semibold text-[#ff3811]'>$20.00</p>
                        </div>
                    </div>
                </div>
    <div className='w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56 object-fill' src={image3} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-3xl font-bold'>Car Air Filter</h1>
                            <p className='text-2xl font-semibold text-[#ff3811]'>$20.00</p>
                        </div>
                    </div>
                </div>
       <div className='w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56' src={image4} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-3xl font-bold'>Car Battery</h1>
                            <p className='text-2xl font-semibold text-[#ff3811]'>$20.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56' src={image5} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-3xl font-bold'>Car Tyre</h1>
                            <p className='text-2xl font-semibold text-[#ff3811]'>$20.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl h-56' src={image6} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <div className='flex'>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                                <p className='text-orange-600 text-2xl'><MdOutlineStarPurple500></MdOutlineStarPurple500></p>
                            </div>
                            <h1 className='text-3xl font-bold'>Car Instruments</h1>
                            <p className='text-2xl font-semibold text-[#ff3811]'>$20.00</p>
                        </div>
                    </div>
                </div>

            </div>
         </div>
 <div className='flex items-center justify-center mt-5'>
              <button className='btn rounded border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white content-center'>More Products</button>
 </div>
        </div>
    )
}
