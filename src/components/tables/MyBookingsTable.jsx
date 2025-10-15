'use client'
import DeleteBookingButton from '@/app/mybookings/components/DeleteBookingButton';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaEdit } from "react-icons/fa";

export default function MyBookingsTable({ data }) {
  return (
    <div><div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
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
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                  <Image src={item?.service_img} width={50} height={50} alt='service-image'></Image>
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
                  <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                </td>
                <td>{item?.date}</td>
                <th>
              <Link href={`/mybookings/${item._id}`}>  <button className="btn btn-ghost btn-md"><FaEdit /></button></Link>
                </th>
                <th>
               <DeleteBookingButton id={item?._id}></DeleteBookingButton>
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
