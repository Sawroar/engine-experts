import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlCallIn } from "react-icons/sl";
import { ImLocation2 } from "react-icons/im";
export default function Info() {
    return (
        <div className='bg-black mx-auto p-8 mt-5'>
            <div className='flex gap-10 flex-col sm:flex-row items-center justify-center'>

          
            <div className='flex flex-col sm:flex-row items-center justify-between gap-8'>
                <div>
                    <FaRegCalendarAlt className='text-[#ff3811] text-4xl' />
                </div>
                <div>
                    <p className='text-white'>We are open monday-friday</p>
                    <h1 className='text-white text-3xl'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex  flex-col sm:flex-row  items-center justify-between gap-8'>
                <div>
                    <SlCallIn className='text-[#ff3811] text-4xl' />
                </div>
                <div>
                    <p className='text-white'>Have a question?</p>
                    <h1 className='text-white text-3xl'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row   items-center justify-between gap-8'>
                <div>
                    <ImLocation2 className='text-[#ff3811]  text-4xl' />
                </div>
                <div>
                    <p className='text-white'>Need a repair? our address</p>
                    <h1 className='text-white text-3xl'>Liza Street, New York</h1>
                </div>
            </div>
              </div>
        </div>
    )
}
