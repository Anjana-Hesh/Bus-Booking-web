import React, { useEffect, useState } from 'react'
import { MdOutlineChair } from 'react-icons/md'
import busSeatsData from '../../../../../constant/busseat/BusSeatData'
import { GiSteeringWheel } from 'react-icons/gi'
import { RiMoneyRupeeCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../../../../components/alertMessage/error/ErrorMessage'

const BusSeat = () => {

    // Track seats Selection
    const [selectedSeat,setSelectedSeat] = useState([])
    const [showError , setShowError] = useState(false)

    // Togle seat cleck
    const handleSeatClick = (seatId) => {
        // If The seat already booked , ignore the select
        const selectedSeat = busSeatsData.find((seat) => seat.id === seatId);

        if(selectedSeat.status === 'booked'){
            return;
        }

        // if the seat is available , select it
        setSelectedSeat((prevSelectedSeates) => {
            //check if the seat is already selected
            if(prevSelectedSeates.includes(seatId)){
                return prevSelectedSeates.filter((seat) => seat !== seatId)
            }else{
                // Show Error if selected more than 10
                if(prevSelectedSeates.length >= 10){
                    setShowError(true)
                    return prevSelectedSeates;
                }else{
                    return [...prevSelectedSeates , seatId]
                }
            }
        })
    }

    useEffect (() => {
        if(showError){
            const timer = setTimeout(() => {
                setShowError(false)
            },10000);

            return () => clearTimeout(timer);
        }
    } , [showError]);

    // Functions to determine seat class On Status
    
    const getSeatName = (seat) => {
        if(seat.status === "booked"){
            return 'text-red-700 cursor-not-allowed'
        } if(selectedSeat.includes(seat.id)){
            return 'text-yellow-600 cursor-pointer'
        }
        return 'text-neutral-500 cursor-pointer'
    };



    return (
        <div className='w-full grid grid-cols-5 gap-10 '>
            
            {/* Seat layout */}
            <div className="col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
                <div className="w-full space-y-7">
                    <p className="text-base text-neutral-600 font-medium text-center">
                        Click on available seats to reserve your seat.
                    </p>

                    {/* Seat layout */}
                    <div className="w-full flex items-stretch gap-x-1.5">
                        <div className="w-10 h-fit">
                            <GiSteeringWheel className='text-3xl mt-7 text-red-700 -rotate-90' />
                        </div>

                        {/* Seats row */}
                        <div className="flex flex-col items-center border-1-2 border-dashed border-neutral-300 pl-7">
                            <div className="flex-1 space-y-5">
                                {/* rows */}
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                                    {busSeatsData.slice(0,9).map((seat) => (
                                        <div
                                            key={seat.id} 
                                            className='flex items-center gap-x-0' 
                                            onClick={() => {handleSeatClick(seat.id)}}>
                                            <h6 className="text-base text-neutral-600 font-bold"> {seat.id} </h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}      
                                </div>
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end"> 
                                    {busSeatsData.slice(9,18).map((seat) => (
                                        <div
                                            key={seat.id} 
                                            className='flex items-center gap-x-0' 
                                            onClick={() => {handleSeatClick(seat.id)}}>
                                            <h6 className="text-base text-neutral-600 font-bold"> {seat.id} </h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))} 
                                </div>
                                <div className="w-full h-auto grid grid-cols-10 gap-x-5 justify-end">
                                    <div className="col-span-9"></div>
                                    {busSeatsData.slice(18,19).map((seat) => (
                                        <div
                                            key={seat.id} 
                                            className='flex items-center gap-x-0' 
                                            onClick={() => {handleSeatClick(seat.id)}}>
                                            <h6 className="text-base text-neutral-600 font-bold"> {seat.id} </h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))} 
                                </div>
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                                    {busSeatsData.slice(19,28).map((seat) => (
                                        <div
                                            key={seat.id} 
                                            className='flex items-center gap-x-0' 
                                            onClick={() => {handleSeatClick(seat.id)}}>
                                            <h6 className="text-base text-neutral-600 font-bold"> {seat.id} </h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))} 
                                </div>
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                                    {busSeatsData.slice(28,39).map((seat) => (
                                        <div
                                            key={seat.id} 
                                            className='flex items-center gap-x-0' 
                                            onClick={() => {handleSeatClick(seat.id)}}>
                                            <h6 className="text-base text-neutral-600 font-bold"> {seat.id} </h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))} 
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* reservation Info */}
                    <div className="w-full flex items-center justify-center gap-6 border-t border-neutral-200 pt-5">
                        <div className="flex itmes-center gap-x-2">
                            <MdOutlineChair className='text-xl text-neutral-500 -rotate-90:' />
                            <p className="text-sm text-neutral-500 font-medium">Available</p>
                        </div>

                        <div className="flex itmes-center gap-x-2">
                            <MdOutlineChair className='text-xl text-red-700 -rotate-90:' />
                            <p className="text-sm text-neutral-500 font-medium">Booked</p>
                        </div>

                        <div className="flex itmes-center gap-x-2">
                            <MdOutlineChair className='text-xl text-yellow-600 -rotate-90:' />
                            <p className="text-sm text-neutral-500 font-medium">Selected</p>
                        </div>

                        <div className="flex itmes-center gap-x-2">
                            <RiMoneyRupeeCircleLine className='text-xl text-neutral-500' />
                            <p className="text-sm text-neutral-500 font-medium">LKR: 850</p>
                        </div>

                    </div>

                </div>
            </div>

            {/* Seats selection action */}
            <div className="w-full col-span-2 space-y-5 bg-neutral-50 rounded-xl p-4 px-4 border border-neutral-200 shadow-sm">
                
                <div className="w-full space-y-2">
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg text-neutral-600 font-medium">
                            Your Destination
                        </h1>
                        <Link to="/bus-ticket" className='text-sm text-red-700'>
                            Change Route 
                        </Link>
                    </div>

                    <div className="space-y-0.5 w-full">
                        <div className="w-full flex items-center justify-between gap-x-5">
                            <p className="text-sm text-neutral-400 font-normal">
                                From <span className="text-xs">(Galle)</span>
                            </p>
                            <p className="text-sm text-neutral-400 font-normal">
                                To <span className="text-xs">(Colombo)</span>
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-between gap-x-4">
                            <h1 className="text-sm text-neutral-600 font-normal">
                                Galle <span className="text-sm font-medium">(8.00 AM)</span>
                            </h1>
                            
                            <div className="flex-1 border-dashed border border-neutral-300" />
                            
                            <h1>
                                Colombo <span className="text-sm font-medium">(11.30 AM)</span>
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="w-full space-y-2">
                    <div className="w-full flex itmes-center justify-between">
                        <h1 className="text-lg text-neutral-600 font-medium">
                            Selected Seats
                        </h1>

                        <div className="bg-red-700/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
                            Non-Refundable
                        </div>
                    </div>

                    {
                        selectedSeat.length > 0 
                            ?
                            <div className='w-full flex items-center gap-x-3'>
                                {selectedSeat.map((seatId) => {
                                    return (
                                        <div key={seatId} className='w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center justify-center text-base text-neutral-700 font-semibold'>
                                            {seatId}
                                        </div>
                                    )
                                })}
                            </div>
                            :
                            <div className='w-full flex items-center gap-x-3'>
                                <p className="text-sm text-neutral-500 font-normal">No Seats Selected</p>
                            </div> 
                    }
                </div>
                
                
                <div className="w-full space-y-2">
                    <h1 className="text-lg text-neutral-600 font-medium">
                        Fare details
                    </h1>

                    <div className="w-full flex items-center justify-between border-dashed border-1-[1.5px] border-neutral-400 pl-2">
                        <h3 className="text-sm text-neutral-500 font-medium">Basic fare</h3>
                        <p className="text-sm text-neutral-600 font-medium">LKR: 850.00</p>
                    </div>

                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex gap-y-0.5 flex-col">
                            <h3 className="text-base text-neutral-500 font-medium">Totle Price: </h3>
                            <span className="text-xs text-neutral-500 font-normal">(Including All Taxes...)</span>
                            
                        </div>

                        {/* calculate the totle price */}
                        <p className="text-base text-neutral-600 font-semibold">
                            LKR {""}
                            {selectedSeat.reduce((totle , seatId) => {
                                const seat = busSeatsData.find((busSeat) => busSeat.id === seatId)
                                return totle + (seat ? seat.price : 0)
                            }, 0)}
                        </p>
                    </div>
                </div>
                
                
                <div className="w-full flex items-center justify-center">
                    {
                        selectedSeat.length > 0 
                        ?
                        <Link to="/bus-ticket/checkout" className='w-full bg-red-600 hover:bg-red-600/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center rounded-lg transition'>
                            Proceed to checkout
                        </Link>
                        :
                        <div className='w-full space-y-0.5'>
                            <button disabled className='w-full bg-red-600 hover:bg-red-600/90 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center rounded-lg transition cursor-not-allowed'>
                                Proceed to checkout
                            </button>
                            <small className="text-xs text-neutral-600 font-normal px-1">
                                Please select at least one seat to proceed to checkout page.
                            </small>
                        </div>
                    }
                </div>

            </div>

            {/* show the error message if more than 10 seats selected */}

            {showError && <ErrorMessage message={"You Can't select more than 10 seats"} />}

        </div>
    )
}

export default BusSeat