import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div><footer className="footer sm:footer-horizontal  text-base-content mt-2 p-10 bg-black">
  <aside>
<Image src={'/assets/logo-1.svg'} alt='logo' width={100} height={87}></Image>
    <p className='text-white'>
      Engine Experts Ltd.
      <br />
      Providing reliable tech since 2005
    </p>
  </aside>
  <nav>
    <h6 className="footer-title text-white font-bold">Services</h6>
    <a className="link link-hover text-white">Branding</a>
    <a className="link link-hover text-white">Design</a>
    <a className="link link-hover text-white">Marketing</a>
    <a className="link link-hover text-white">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white font-bold">Company</h6>
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
    <a className="link link-hover text-white">Jobs</a>
    <a className="link link-hover text-white">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white font-bold">Legal</h6>
    <a className="link link-hover text-white">Terms of use</a>
    <a className="link link-hover text-white">Privacy policy</a>
    <a className="link link-hover text-white">Cookie policy</a>
  </nav>
</footer></div>
  )
}
