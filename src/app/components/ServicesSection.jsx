import dbConnet, { collectionNamesObj } from '@/lib/dbConnet'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default async function ServicesSection() {
    const serviceCollection = dbConnet(collectionNamesObj.ServicesCollection)

    const data = await serviceCollection.find({}).toArray();
    return (
        <div className='mt-4'>
            <p className='text-red-600 text-center font-bold'>Service</p>
            <h1 className='text-center font-bold text-3xl'>Our Service Area</h1>
            <div className='grid grid-cols-12 md:grid-cols-12 sm:grid-cols-1'>
                {data.map((item) => {
                    return (
                        <div key={item._id} className='col-span-12 md:col-span-6 w-96 shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition-all duration-500 ease-in-out lg:col-span-4 p-4 border-gray-950 rounded-2xl h-full '>
                            <figure className='w-full h-3/4 flex justify-center items-center'>
                                <Image className='w-full h-full object-fit rounded ' src={item.img} width={314} height={108} alt={item.title}></Image>
                            </figure>
                            <div className='flex  items-center justify-between  mt-4 gap-3'>
                                <div>
                                    <h2 className='font-bold text-xl'>{item.title}</h2>
                                    <p className='font-bold text-xl text-orange-500'>Price: $ {item.price}</p>
                                </div>
                                <div>
                                    <Link className='text-orange-500 btn' href={`services/${item._id}`}><FaArrowRight /></Link>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
              <div className='flex items-center justify-center'>
                 <button className='btn rounded border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white content-center'> More Services</button>
              </div>
        </div>
    )
}
