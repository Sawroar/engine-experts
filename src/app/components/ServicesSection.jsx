import dbConnet from '@/lib/dbConnet'
import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
    const serviceCollection= dbConnet('EngineExpertsServices')

 const data= await serviceCollection.find({}).toArray();
    return (
        <div className='grid grid-cols-12'>

            {data.map((item) => {
                return (
                    <div key={item._id} className='col-span-12 md:col-span-6   lg:col-span-4'>
                   <Image src={item.img} width={314} height={208} alt='services_images'></Image>
                    </div>
                )
           })}
        </div>
    )
}
