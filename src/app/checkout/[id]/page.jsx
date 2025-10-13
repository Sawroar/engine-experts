import React from 'react'
import CheckoutForm from '@/app/components/CheckoutForm';
export default  async function page({params}) {
       const p= await params;
    const res= await fetch(`http://localhost:3000/api/service/${p.id}`)
 const data = await res.json()
  return (
    <div>
    <CheckoutForm data={data}></CheckoutForm>
      {JSON.stringify(data)}
    </div>
  )
}
