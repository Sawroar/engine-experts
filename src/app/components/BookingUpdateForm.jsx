'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingUpdateForm({ data }) {
     const router=useRouter()
    const { data: session } = useSession()
       const handleSubmit = async(e) => {
        e.preventDefault()
        const form = e.target;
          const date = form.date.value;
          const address = form.address.value;
        const phone = form.phone.value;
          const bookingPayload = {
            // customerName: name,
            date, phone, address,
            // service_id: data?.singleBooking?._id,
            // service_name: data?.singleBooking?.title,
            // service_img: data?.img,
            // service_price: data?.price
        }
        toast('Form Submitting...')
            const res= await  fetch(`http://localhost:3000/api/mybookings/${data?._id}`,{
            method:'PATCH',
        body:JSON.stringify(bookingPayload)
        })
        const updatedResponse= await res.json()
         router.push('/mybookings')

    }
    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
         <div className="flex justify-center items-center">
               <div>
                <h1 className="text-center font-bold text-3xl mb-3">Service Name:{data?.service_name}</h1>
                <Image src={data?.service_img} width={600} height={250} className="rounded mt-2" alt="Image"></Image>
            </div>
         </div>
            <div className='p-8 bg-[#F3F3F3] mt-5 rounded-2xl'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend ">Name</legend>
                        <input type="text" className="input w-full" readOnly defaultValue={session?.user?.name} name='name' placeholder="Name" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <input type="date" className="input w-full"  defaultValue={data?.date} name='date' placeholder="Type here" />
                    </fieldset>
                </div>
           
       
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="text" className="input w-full" readOnly defaultValue={session?.user?.email} name='email' placeholder="Email" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Due Amount</legend>
                        <input type="text" className="input w-full" readOnly defaultValue={data?.dueAmount} name='due' placeholder="Due Amount" />
                    </fieldset>
                </div>
      
     
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">phone</legend>
                        <input type="text" className="input w-full" name='phone' defaultValue={data?.phone} placeholder="phone" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Present Address</legend>
                        <input type="text" className="input w-full" name='address' defaultValue={data?.address} placeholder="Present Address" />
                    </fieldset>
                </div>
                </div>
        
            <div className='grid-cols-1 px-60'>
             <button type="submit" className="text-white bg-amber-500 mt-2 p hover:bg-[#ff3811] rounded-2xl btn w-full hover:scale-105 transform transition-all duration-500 ease-in-out ">Updae Booking</button>
          </div>
            </div>
        </form>
    )
}
