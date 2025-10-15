import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteForever } from "react-icons/md";
export default function DeleteBookingButton(id) {
    const router =useRouter()
    const handleDelete=async({id})=>{
                const res = await fetch(`http://localhost:3000/api/service/${id}`,{
            method:'DELETE'
        })
const data =await res.json()
toast.success('Deleted Successfully')
router.refresh()
    }
  return (
    <div>   <button className="btn btn-ghost btn-md" onClick={()=>handleDelete(id)}><MdDeleteForever /></button></div>
  )
}
