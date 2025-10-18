import React from 'react'
import BusImage from "../../../../assets/bus (1).png"
import { FaCircleCheck } from 'react-icons/fa6'
import { IoCloseCircle } from 'react-icons/io5'
import QrImg from '../../../../assets/qrcode.jpg'
import { FaPhone } from 'react-icons/fa'

const PassangerInvoice = () => {
  return (
    <div className='w-full col-span-4 rounded-3xl  relative'>
        
        {/* Top bus details */}
        <div className="w-full flex items-center justify-between bg-red-700 px-6 py-3 rounded-tl-3xl">
            <div className="flex items-center gap-x-3">
                <img src={BusImage} alt="bus image" className="w-auto h-12 object-cover object-center" />
                <h1 className="text-xl text-neutral-50 font-bold uppercase tracking-wider pt-1">Hashari Express</h1>
            </div>

            <div className="flex items-center gap-x-2">
                <p className="text-xl text-neutral-50 font-bold">
                    <span className="text-lg">(Bus No.)</span> NA - 8506
                </p>
            </div>
        </div>

        <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-7 mb-7">
            <div className="col-span-4 space-y-3.5">
                {/* bill no. per seat and date */}
                <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
                    <p className="text-base text-neutral-500 font-normal">
                        Bill no.: 00000856
                    </p>

                    <p className="text-base text-neutral-500 font-normal">
                        LKR 850.00 <span className="text-sm">/seat</span>
                    </p>

                    <p className="text-base text-neutral-500 font-normal">
                        Date: 2025-10-18
                    </p>
                    
                </div>

                {/* Passanger details */}
                <div className="w-full flex items-center justify-between">
                    <div className="space-y-1.5">
                        <p className="text-base text-neutral-600 font-normal">
                            Name of passanger: <span className="font-medium">Anjana heshan</span>
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Totle seat no: <span className="font-medium">A1 A3 A4 B6</span>
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Totle number of passenger: <span className="font-medium"> 08 Only</span>
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Pickup Station: <span className="font-medium">Galle -Hospital</span>
                        </p>

                    </div>

                    <div className="space-y-4 flex items-center justify-center flex-col">
                        <div className="space-y-1 text-center">
                            <p className="text-base text-neutral-600 font-normal">
                                Totle Price
                            </p>

                            <div className="text-xl text-neutral-600 font-bold">LKR 850.00</div>
                        </div>

                        <div className="w-fit px-3 py-1 rounded-full bg-green-500/5 border-green-600 border text-green-600 text-sm font-medium flex items-center justify-center gap-2">
                            <FaCircleCheck size={16} />
                            <span>Bill Paid</span>
                        </div>

          
          {/* pending state */}

                        {/* <div className="w-fit px-3 py-1 rounded-full bg-green-500/5 border-red-600 border text-red-600 text-sm font-medium flex items-center justify-center gap-2">
                            <IoCloseCircle size={16} />
                            <span>Pending</span> 
                        </div>*/}

                    </div>
                </div>

                {/* Route details */}
                <div className="w-full flex items-center justify-between border-dashed border-t-2 border-neutral-200 pt-3">
                    <p className="text-base text-neutral-600 font-normal">
                        Galle <span className="text-neutral-400 px-2"> ---------- </span> Colombo
                    </p>

                    <p className="text-base text-neutral-600 font-normal">
                        Arrive at 11.30 AM
                    </p>

                    <p className="text-base text-neutral-600 font-normal">
                        Departure at 8.00 AM
                    </p>
                </div>
            </div>
            
            <div className="col-span-1 border border-neutral-200 shadow-sm p-1">
                <img src={QrImg} alt="Qr code image" className="w-full aspect-square object-cover object-center rounded-xl" />
            </div>

        </div>

        {/* left bottom section */}
        <div className="w-full bg-red-700 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between">
            <p className="text-xs text-neutral-100 font-light px-5 py-1.5">
                Note: 40% charge for canellation price 24 hours of programme
            </p>
            <div className="flex items-center gap-x-2">
                <FaPhone className='w-3 h-3 text-neutral-100'/>
                <p className="text-sm text-neutral-100 font-light px-5 py-1.5">
                    076-4810851 , 0769760198
                </p>
            </div>
        </div>

    </div>
  )
}

export default PassangerInvoice