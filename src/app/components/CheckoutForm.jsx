'use client'
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function checkoutForm({ data }) {
    const router = useRouter()
    const { data: session } = useSession()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const dueAmount = form.due.value;
        const address = form.address.value;
        const phone = form.phone.value;
        const bookingPayload = {
            customerName: name,
            email, date, dueAmount, phone, address,
            service_id: data?._id,
            service_name: data?.title,
            service_img: data?.img,
            service_price: data?.price
        }
        toast('Form Submitting...')
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingPayload)
        })
        const postedResponse = await res.json()
            router.push('/mybookings')

    }
    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className="text-center font-bold text-3xl mb-3">Service Name:{data?.title}</h1>
                    <Image src={data?.img} width={600} height={250} className="rounded" alt="Image"></Image>
                </div>
            </div>
            <div className="p-8 bg-[#F3F3F3] mt-5 rounded-2xl">
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 '>
                    <div className='grid-cols-6'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend ">Name</legend>
                            <input type="text" className="input w-full" readOnly defaultValue={session?.user?.name} name='name' placeholder="Name" />
                        </fieldset>
                    </div>
                    <div className='grid-cols-6'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Date</legend>
                            <input type="date" className="input w-full" name='date' placeholder="Type here" />
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
                            <input type="text" className="input w-full" readOnly defaultValue={data?.price} name='due' placeholder="Due Amount" />
                        </fieldset>
                    </div>
                    <div className='grid-cols-6'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">phone</legend>
                            <input type="text" className="input w-full" name='phone' placeholder="phone" />
                        </fieldset>
                    </div>
                    <div className='grid-cols-6'>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend w-full">Present Address</legend>
                            <input type="text" className="input w-full" name='address' placeholder="Present Address" />
                        </fieldset>
                    </div>
                </div>
                <div className='grid-cols-1 px-60'>
                 <button type="submit" className="text-white bg-amber-500 mt-2 p hover:bg-[#ff3811] rounded-2xl btn w-full hover:scale-105 transform transition-all duration-500 ease-in-out ">Confirm Order</button>
                </div>
            </div>

           
        </form>
    )
}
