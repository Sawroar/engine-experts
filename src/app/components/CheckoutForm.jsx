'use client'

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

export default function checkoutForm({data}) {
    const {data:session}= useSession()
    console.log(session)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const dueAmount = form.due.value;
        const presentAddress = form.address.value;
        const phone = form.phone.value;
        const data = { name, date, email, dueAmount, presentAddress, phone }
        toast('Form Submitting...')
        console.log(data)

    }
    return (
        <form onSubmit={handleSubmit} className='container mx-auto'>
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
                        <input type="date" className="input" name='date' placeholder="Type here" />
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
                        <input type="text" className="input" readOnly defaultValue={data?.price} name='due' placeholder="Due Amount" />
                    </fieldset>
                </div>
            </div>
            <div className='flex gap-4 justify-around'>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">phone</legend>
                        <input type="text" className="input" name='phone' placeholder="phone" />
                    </fieldset>
                </div>
                <div className='grid-cols-6'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Present Address</legend>
                        <input type="text" className="input" name='address' placeholder="Present Address" />
                    </fieldset>
                </div>
            </div>
            <button type="submit" className="bg-blue-600 rounded-xl text-xl text-center">Confirm Order</button>
        </form>
    )
}
