import React from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { IoMdCheckboxOutline } from 'react-icons/io'

const Amenities = () => {
    return (
        <div className='col-span-3 w-full'>
            <div className="w-full space-y-3">
                <h1 className="text-lg text-neutral-600 font-medium text-start">
                    Bus Amenities
                </h1>

                <div className="w-full grid grid-cols-2 gap-8">
                    <div className="col-span-1 w-full space-y-1">
                        
                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Super Ac
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Charging Ports
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Internet & Wifi
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Ac & Air Suspensions
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className='w-5 h-5 text-red-500' />
                            <p className="text-base text-red-700 font-normal">
                                Sleaper Seats
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className='w-5 h-5 text-red-500' />
                            <p className="text-base text-red-700 font-normal">
                                Snacks
                            </p>
                        </div>

                    </ div>

                    <div className="col-span-1 w-full">
                        
                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                 2 * 2 VIP Sofa
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className='w-5 h-5 text-red-500' />
                            <p className="text-base text-red-700 font-normal">
                                Cooling Fans
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                LED TV
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Water Bottles
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <IoMdCheckboxOutline className='w-5 h-5 text-green-500' />
                            <p className="text-base text-neutral-700 font-normal">
                                Luxury Seats
                            </p>
                        </div>

                        <div className="flex items-center gap-x-2 w-full">
                            <AiOutlineCloseSquare className='w-5 h-5 text-red-500' />
                            <p className="text-base text-red-700 font-normal">
                                Comfortable Seats
                            </p>
                        </div>
                    </ div>

                </div>
            </div>
        </div>
    )
}

export default Amenities