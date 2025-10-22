import Image from "next/image";
import Link from "next/link";

export default async function ServiceDetailPage({params}) {
    const p= await params;
    const res= await fetch(`http://localhost:3000/api/service/${p.id}`)
 const data = await res.json()
    return (
    <div className="container mx-auto">
<section className="flex-justify-center">
<figure className="relative">
<Image src={'/assets/images/checkout/checkout.png'} width={1137}height={300} alt="banner"></Image>
</figure>
</section>
<Image src={data?.img} width={400} height={400} alt={data.title}></Image>
  <Link href={`/checkout/${data._id}`}>
   <button className="text-white bg-amber-500 btn">Checkout</button>
  </Link>
 
    {JSON.stringify(data)}

    </div>
  )
}
