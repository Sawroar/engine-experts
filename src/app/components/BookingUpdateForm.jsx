'use client'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function BookingUpdateForm({ data }) {
     const router=useRouter()
    const { data: session } = useSession()
    console.log(data)
    console.log('from update form',data)
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
        console.log(bookingPayload)
        const res= await  fetch(`http://localhost:3000/api/mybookings/${data?._id}`,{
            method:'PATCH',
        body:JSON.stringify(bookingPayload)
        })
        const updatedResponse= await res.json()
        console.log('updated Data',updatedResponse)
        router.push('/mybookings')

    }
    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
            <div>
                <h1 className="text-center font-bold text-3xl">Service Name:{data?.title}</h1>
            </div>
            <div className='flex gap-4 justify-around'>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend ">Name</legend>
                        <input type="text" className="input" readOnly defaultValue={session?.user?.name} name='name' placeholder="Name" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Date</legend>
                        <input type="date" className="input"  defaultValue={data?.date} name='date' placeholder="Type here" />
                    </fieldset>
                </div>
            </div>
            <div className='flex gap-4 justify-around'>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input type="text" className="input" readOnly defaultValue={session?.user?.email} name='email' placeholder="Email" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Due Amount</legend>
                        <input type="text" className="input" readOnly defaultValue={data?.dueAmount} name='due' placeholder="Due Amount" />
                    </fieldset>
                </div>
            </div>
            <div className='flex gap-4 justify-around'>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">phone</legend>
                        <input type="text" className="input" name='phone' defaultValue={data?.phone} placeholder="phone" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Present Address</legend>
                        <input type="text" className="input" name='address' defaultValue={data?.address} placeholder="Present Address" />
                    </fieldset>
                </div>
            </div>
            <button type="submit" className="bg-blue-600 rounded-xl text-xl text-center">Update Booking</button>
        </form>
    )
}
