import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
export default function DeleteBookingButton(id) {
    const router =useRouter()
    const handleDelete=async({id})=>{
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${id}`,{
            method:'DELETE'
        })
const data =await res.json()
toast.success('Deleted Successfully')
router.refresh()
    }
  return (
    <button className="btn btn-ghost btn-md" onClick={()=>handleDelete(id)}><MdDeleteForever /></button>
  )
}
