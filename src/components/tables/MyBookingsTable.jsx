'use client'
import DeleteBookingButton from '@/app/mybookings/components/DeleteBookingButton';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";

export default function MyBookingsTable({ data }) {
  return (
    <div><div className="overflow-x-auto mt-6 mb-6">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Due Amount</th>
            <th>Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.result?.map((item) => {
            return (
              <tr key={item?._id}>
                               <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                  <Image src={item?.service_img} width={50} height={50} className="object-cover"
                            onError={() => handleImageError(item._id)}
                            onLoad={() => console.log('Image loaded:', item._id)} alt='service-image'></Image>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item?.service_name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?.dueAmount}
                  <br />
                  <span className="badge badge-ghost badge-sm">Engine Support Technician</span>
                </td>
                <td>{item?.date}</td>
                <th>
              <Link href={`/mybookings/${item._id}`}>  <button className="btn btn-ghost btn-lg  hover:text-[#2c3aff] rounded-2xl hover:scale-105 transform transition-all duration-500 ease-in-out"><FaEdit /></button></Link>
                </th>
                <th>
                     <DeleteBookingButton  id={item?._id}></DeleteBookingButton>
              
                </th>
              </tr>
            )
          })}

        </tbody>
        {/* foot */}

      </table>
    </div></div>
  )
}
