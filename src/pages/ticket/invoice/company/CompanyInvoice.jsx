import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const CompanyInvoice = () => {
  return (
    <div className='w-full col-span-1 border-dashed border-l-1 border-neutral-400 relative'>
        <div className="w-full bg-red-700 px-4 py-2 rounded-tr-3xl ">
            <h1 className="text-2xl text-neutral-50 font-bold text-center">
                Bus Ticket
            </h1>   
        </div>

        <div className="w-full px-4 py-7 space-y-2">
            <p className="text-sm text-neutral-600 font-normal">
                Bill no.: 00000856
            </p>

            <p className="text-base text-neutral-500 font-normal">
                Date: 2025-10-18
            </p>

            <p className="text-base text-neutral-600 font-normal">
                Name: <span className="font-medium">Anjana heshan</span>
            </p>

            <p className="text-base text-neutral-600 font-normal">
                From Galle: <span className="font-medium">(Stand)</span>
            </p>

            <p className="text-base text-neutral-600 font-normal">
                To Colombo: <span className="font-medium">(Stand)</span>
            </p>

            <p className="text-sm text-neutral-600 font-normal">
                Departure time: 8.00 AM
            </p>

            <p className="text-sm text-neutral-600 font-normal">
                Seat no.: A1, A3, A4, B6
            </p>

            <p className="text-sm text-neutral-600 font-normal">
                Total Passangers: 08 Only
            </p>

            <p className="text-sm text-neutral-600 font-normal">
                Total Price: LKR 850.00
            </p>

        </div>

        {/* right bottom section */}
        <div className="w-full bg-red-700 absolute bottom-0 left-0 rounded-br-3xl flex items-center justify-center">
            <div className="flex items-center gap-x-2">
                <FaPhone className='w-3 h-3 text-neutral-100'/>
                <p className="text-sm text-neutral-100 font-light px-5 py-1.5">
                    076-4810851
                </p>
            </div>
        </div>
    </div>
  )
}

export default CompanyInvoice