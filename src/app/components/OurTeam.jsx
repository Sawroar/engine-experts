import React from 'react'
import image1 from '../../../public/assets/images/team/1.jpg'
import image2 from '../../../public/assets/images/team/2.jpg'
import image3 from '../../../public/assets/images/team/3.jpg'
import img from '../../../public/assets/social.png'
import Image from 'next/image'
export default function OurTeam() {
    return (
        <div>
            <div className='flex justify-center items-center mt-5'>
                <div>
                    <h1 className='text-center text-[#ff3811] mb-5'> Team</h1>
                    <h1 className='text-5xl text-center font-bold mb-5'>Meet Our Team</h1>
                    <p className='text-center text-[#737373] mb-5'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                </div>
            </div>
            <div className='flex items-center justify-center mt-14'>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6'>
                <div className=' w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl' src={image1} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <h1 className='text-2xl font-bold'>Car Machanic</h1>
                            <p className='text-2xl font-semibold mb-4'>Engine Expert</p>
                            <Image src={img} width={150} height={20} alt='Image-1'></Image>
                        </div>
                    </div>
                </div>
                <div className=' w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl' src={image2} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <h1 className='text-2xl font-bold'>Car Machanic</h1>
                            <p className='text-2xl font-semibold mb-4'>Engine Expert</p>
                            <Image src={img} width={150} height={20} alt='Image-1'></Image>
                        </div>
                    </div>
                </div>
                <div className=' w-88 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-8'>
                    <div className='flex justify-center items-center'>
                        <Image className='bg-[#F3F3F3] rounded-2xl' src={image3} width={326} height={215} alt='Image-1'></Image>
                    </div>
                    <div className='flex justify-center items-center mt-3'>
                        <div>
                            <h1 className='text-2xl font-bold'>Car Machanic</h1>
                            <p className='text-2xl font-semibold mb-4'>Engine Expert</p>
                            <Image src={img} width={150} height={20} alt='Image-1'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
