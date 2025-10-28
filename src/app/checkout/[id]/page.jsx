import React from 'react'
import CheckoutForm from '@/app/components/CheckoutForm';
export default  async function page({params}) {
       const p= await params;
    const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${p.id}`)
 const data = await res.json()
  return (
    <div>
    <CheckoutForm data={data}></CheckoutForm>
    </div>
  )
}
