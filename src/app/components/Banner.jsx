import React from 'react'
import Image1 from '../../../public/assets/images/banner/1.jpg'
import Image2 from '../../../public/assets/images/banner/2.jpg'
import Image3 from '../../../public/assets/images/banner/3.jpg'
import Image4 from '../../../public/assets/images/banner/4.jpg'
import Image5 from '../../../public/assets/images/banner/5.jpg'
import Image6 from '../../../public/assets/images/banner/6.jpg'
import Image from 'next/image'
export default function Banner() {
  return (
    <div className='p-6 '>
      <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Image
          src={Image5} alt='banner-1' height={200} width={500}
          className="w-full rounded-2xl" />
        <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide4" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide2" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Image
          src={Image2} alt='banner-2' height={200} width={500}
          className="w-full rounded-2xl" />
         <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide1" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide3" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Image
          src={Image3} alt='banner-3' height={200} width={500}
          className="w-full rounded-2xl" />
          <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide2" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide4" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Image
          src={Image4} alt='banner-4' height={200} width={500}
          className="w-full rounded-2xl" />
        <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide5" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide6" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <Image
          src={Image1} alt='banner-4' height={200} width={500}
          className="w-full rounded-2xl" />
            <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide6" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide4" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <Image
          src={Image6} alt='banner-4' height={200} width={500}
          className="w-full rounded-2xl" />
        <div className="absolute  right-5 top-1/2 flex translate-y-96">
          <a href="#slide5" className="btn btn-circle hover:text-white hover:bg-amber-600">❮</a>
          <a href="#slide1" className="btn btn-circle hover:text-white hover:bg-amber-600">❯</a>
        </div>
      </div>
    </div></div>
  )
}
