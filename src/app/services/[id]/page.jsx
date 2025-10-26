import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image1 from '../../../../public/assets/images/banner/2.jpg'
import Image2 from '../../../../public/assets/images/Frame.png'
export default async function ServiceDetailPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`)
  const data = await res.json()
  return (
    <div className="container mx-auto mt-4">
      <section className="flex-justify-center">
        <figure className="relative flex justify-center items-center">
          <Image src={'/assets/images/checkout/checkout.png'} width={1137} height={300} alt="banner"></Image>
        </figure>
      </section>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-12 mt-36 gap-2">
        <div className="col-span-8">
          <Image src={data?.img} width={752} height={400} alt={data.title} className="rounded-2xl"></Image>
          <h1 className="font-bold text-4xl mt-3">{data?.title}</h1>
          <p className="mt-7">{data?.description}</p>
          <div className="flex gap-5 mt-4">
            <div className="p-6 bg-[#F3F3F3] border-t-2 rounded border-orange-500">
              <h3 className="text-[#444444] font-bold">Instant Car Services</h3>
              <p className="text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            <div className="p-6 bg-[#F3F3F3] border-t-2 rounded border-orange-500">
              <h3 className="text-[#444444] font-bold">24/7 Quality Service</h3>
              <p className="text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
          </div>
          <div className="flex gap-5 mt-4">
            <div className="p-6 bg-[#F3F3F3] border-t-2 rounded border-orange-500">
              <h3 className="text-[#444444] font-bold">Easy Customer Service</h3>
              <p className="text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
            <div className="p-6 bg-[#F3F3F3] border-t-2 rounded border-orange-500">
              <h3 className="text-[#444444] font-bold">Quality Cost Service</h3>
              <p className="text-[#737373]">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
            </div>
          </div>
          <p className="mt-2 text-[#737373] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          <h1 className="font-bold text-4xl mt-3">3 Simple Steps to Process</h1>
          <p className="mt-2 text-[#737373] ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
          <div className="flex gap-6">
            <div className="mt-6 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-500 ease-in-out p-8">
              <div className="flex items-center justify-center mt-3">
                <div>
                  <span className="bg-[#eab2a7] rounded-full p-4 pt-5 pb-5">
                    <span className="text-white bg-[#FF3811] rounded-full p-2  font-bold">01</span>
                  </span>
                </div>
              </div>
              <h1 className="mt-5 text-2xl font-bold text-center">STEP 1</h1>
              <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
            </div>
            <div className="mt-6 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-500 ease-in-out p-8">
              <div className="flex items-center justify-center mt-3">
                <div>
                  <span className="bg-[#eab2a7] rounded-full p-4 pt-5 pb-5">
                    <span className="text-white bg-[#FF3811] rounded-full p-2  font-bold">02</span>
                  </span>
                </div>
              </div>
              <h1 className="mt-5 text-2xl font-bold text-center">STEP 2</h1>
              <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
            </div>
            <div className="mt-6 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform transition-all duration-500 ease-in-out p-8">
              <div className="flex items-center justify-center mt-3">
                <div>
                  <span className="bg-[#eab2a7] rounded-full p-4 pt-5 pb-5">
                    <span className="text-white bg-[#FF3811] rounded-full p-2  font-bold">03</span>
                  </span>
                </div>
              </div>
              <h1 className="mt-5 text-2xl font-bold text-center">STEP 3</h1>
              <p className="text-[#737373]">It uses a dictionary of over 200 .</p>
            </div>
          </div>
          <Image src={Image1} height={500} width={6000} alt="Image-1" className="rounded mt-5"></Image>
        </div>
        <div className="col-span-4">
          {console.log(data)}
          <div className="bg-[#F3F3F3] px-5 py-3 rounded-2xl">

            <h1 className="font-bold text-2xl mb-5">Services</h1>
            <div className="flex justify-between items-center cursor-pointer bg-white hover:bg-[#ff3811] hover:text-white px-6 py-3 rounded">
              <h3>Full Car Repair</h3>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-4 bg-white hover:bg-[#ff3811] hover:text-white px-6 py-3 rounded">
              <h3>Engine Repair</h3>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-4 bg-white hover:bg-[#ff3811] hover:text-white px-6 py-3 rounded">
              <h3>Automatic Services</h3>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-4 bg-white hover:bg-[#ff3811] hover:text-white px-6 py-3 rounded">
              <h3>Engine Oil Change</h3>
              <FaArrowRight />
            </div>
            <div className="flex justify-between items-center cursor-pointer mt-4 bg-white hover:bg-[#ff3811] hover:text-white px-6 py-3 rounded">
              <h3>Battery Charge</h3>
              <FaArrowRight />
            </div>
          </div>
          <div className="bg-black px-5 py-3 mt-3 rounded-2xl">
            <h1 className="font-bold text-2xl mb-5 text-white text-center">Download</h1>
            <div className="flex justify-around items-center cursor-pointer text-white px-6 py-3 rounded">
              <Image src={Image2} height={50} width={0} alt='details'></Image>
              <div>
                <h3>Our Brochure</h3>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="p-4 bg-[#ff3811]" >
                <FaArrowRight />
              </div>
            </div>
            <div className="flex justify-around items-center cursor-pointer text-white px-6 py-3 rounded">
              <Image src={Image2} height={50} width={0} alt='details'></Image>
              <div>
                <h3>Our Brochure</h3>
                <p className="text-[#A2A2A2]">Download</p>
              </div>
              <div className="p-4 bg-[#ff3811]" >
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="bg-black px-5 py-3 mt-3 rounded-2xl">
            <div className="flex justify-center items-center cursor-pointer text-white px-6 py-3 rounded">
              <div>
                <Link href={'/'} className=" text-xl text-white text-center"><Image src={'/assets/logo-1.svg'} alt='logo' width={100} height={87}></Image></Link>
                <h3 className="font-bold text-xl">Our Need Help? We Are HereTo Help You</h3>
                <div className="bg-white p-4 rounded-2xl relative pb-6 ">
                  <h2 className="text-[#ff3811] text-center font-bold">Car Doctor <span className="text-black">Special</span></h2>
                  <p className="text-[#A2A2A2] text-center font-bold">Save up to <span className="text-[#ff3811] ">60% off</span></p>
                  <div className=" flex items-center justify-center absolute translate-x-32">
                    <button className='btn rounded border-[#ff3811] text-[#ff3811] hover:bg-[#ff3811] hover:text-white content-center'> Get A Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-2xl font-bold">Price: ${data?.price}</p>
          <Link href={`/checkout/${data._id}`}><button className="text-white bg-amber-500  hover:bg-[#ff3811] rounded-2xl btn w-full hover:scale-105 transform transition-all duration-500 ease-in-out ">Proceed Checkout</button> </Link>
        </div>
      </section>
    </div>
  )
}
