import React from 'react'
import RootLayout from '../../layouts/rootLayout'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import MasterCardId from "../../assets/mastercard.png"
import Paypal from "../../assets/paypal.png"
import VisaCard from "../../assets/visa.png"

const Footer = () => {
  return (
    <div className='w-full h-auto bg-neutral-950 py-12'>
        <RootLayout className="space-y-10">

            {/* Footer other content */}
            <div className="w-full grid grid-cols-5 gap-8">
                <div className="col-span-2 space-y-8 md:pr-10 pr-0">
                    <div className="space-y-3">
                        {/* logo */}
                        <Link to="/" className='text-6xl text-red-500 font-bold'>
                            Bus
                        </Link>

                        <p className="text-sm text-neutral-500 font-normal">
                            Bus is all about booking tickets through quick seats platform to make comfortable to the passengers. 
                        </p>
                    </div>

                    {/* social links */}
                    <div className="w-full flex items-center gap-x-5">
                        <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-red-700 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                            <FaInstagram className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-red-700 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                            <FaFacebook className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-red-700 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                            <FaYoutube className='w-5 h-5 text-neutral-50' />
                        </div>

                        <div className="w-11 h-11 rounded-xl bg-neutral-800/40 hover:bg-red-700 flex items-center justify-center cursor-pointer ease-in-out duration-500">
                            <FaLinkedin className='w-5 h-5 text-neutral-50' />
                        </div>
                    </div>
                </div>

                <div className="col-span-1 space-y-5">
                    <h1 className="text-lg text-neutral-100 font-semibold">
                        Quick Links
                    </h1>

                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            About Us
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            My Account
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Reserve Your Ticket
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Create Your Account
                        </Link>
                    </div>
                </div>

                <div className="col-span-1 space-y-5">
                    <h1 className="text-lg text-neutral-100 font-semibold">
                        Top Reserved Routes
                    </h1>

                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Galle - Colombo
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Elpitiya - Colombo
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Galle - Maththala
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Elpitiya - Makumbura
                        </Link>
                    </div>
                </div>

                <div className="col-span-1 space-y-5">
                    <h1 className="text-lg text-neutral-100 font-semibold">
                        Support Links
                    </h1>

                    <div className="space-y-2">
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Privacy Policy
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Terms & Conditions
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            Help & Support Center
                        </Link>
                        <Link to="/" className='block text-base text-neutral-500 hover:text-neutral-300 font-normal ease-in-out duration-300'>
                            FAQs
                        </Link>
                    </div>
                </div>

            </div>

            {/* separator */}
            <div className="w-full h-px bg-neutral-800/50" />

            {/* Copyright */}
            <div className="w-full flex items-center justify-between">
                <p className="text-sm text-neutral-600 font-normal">
                    Conditions &copy; 2025. All rights reserved.
                </p>

                <div className="flex items-center gap-x-2">
                    <div className="">
                        <img src={MasterCardId} alt="Master Card" className="w-fit h-9 object-contain object-center" />
                    </div>
                    <div className="">
                        <img src={Paypal} alt="Paypal" className="w-fit h-9 object-contain object-center" />
                    </div>
                    <div className="">
                        <img src={VisaCard} alt="Visa Card" className="w-fit h-9 object-contain object-center" />
                    </div>
                </div>
            </div>

        </RootLayout>
    </div>
  )
}

export default Footer