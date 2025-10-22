import BookingUpdateForm from '@/app/components/BookingUpdateForm'
import { headers } from 'next/headers'

import React from 'react'

export default async function UpdateBookingPage({params}) {
    const p = await params
    const res= await fetch(`http://localhost:3000/api/mybookings/${p.id}`,{
headers: await headers()
    })
  const data=  await res.json()
    return (
    <div>
        <BookingUpdateForm data={data}></BookingUpdateForm>
        </div>
  )
}
