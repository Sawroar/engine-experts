import MyBookingsTable from '@/components/tables/MyBookingsTable'
import { headers } from 'next/headers'
// import React, { useEffect, useState } from 'react'
const fetchBookings=async()=>{
const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`,{
  headers: new Headers(await headers()) 
})
const d= await res.json()
return d
}
export default async function  myBookingsPage() {
  const data = await fetchBookings()
  // const [data,setData]=useState([])
  // useEffect(()=>{
   
  //  } 

  // },[])

  
  return (
    <div>
      <MyBookingsTable data={data} ></MyBookingsTable></div>
  )
}
