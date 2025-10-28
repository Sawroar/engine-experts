import BookingUpdateForm from '@/app/components/BookingUpdateForm'
import { headers } from 'next/headers'

import React from 'react'

export default async function UpdateBookingPage({params}) {
    const p = await params
    const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/mybookings/${p.id}`,{
headers:new Headers(await headers()) 
    })
  const data=  await res.json()
    return (
    <div>
        <BookingUpdateForm data={data}></BookingUpdateForm>
        </div>
  )
}
