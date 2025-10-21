// import React from 'react'
// import { FaBus, FaStar } from 'react-icons/fa'
// import { MdOutlineChair } from 'react-icons/md'
// import { RiVipFill } from 'react-icons/ri'
// import { TbAirConditioning } from 'react-icons/tb'
// import { Link } from 'react-router-dom'

// const TicketCard = ({icon: Icon , busName ,routeFrom , routeTo , arrivalTime , departureTime , price , availableSeats}) => {
//   return (
//      <div className='w-full rounded-xl p-5 border-2 border-neutral-300 space-y-5'>
//             <div className="space-y-5 w-full border-b border-neutral-300/60 pb-4">
//                 {/* Routes */}
//                 <div className="space-y-0">

//                     {/* Bus Info */}
//                     <div className="w-full flex items-center justify-between">
//                         <div className="flex items-center gap-x-2">
//                             <FaBus className='h-5 w-5 text-red-700' />
//                             <p className="text-lg text-neutral-700 font-semibold">
//                                 {busName}
//                             </p>
//                         </div>

//                         <div className="flex items-center gap-x-4">
//                             <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                                 <TbAirConditioning className='w-4 h-4 text-red-700' />
//                                 <p className="text-xs text-neutral-600 font-normal">
//                                     AC
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-x-4">
//                             <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                                 <FaStar className='w-4 h-4 text-yellow-500' />
//                                 <p className="text-xs text-yellow-600 font-normal pt-0.6">
//                                     4.5
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-x-4">
//                             <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                                 <RiVipFill className='w-4 h-4 text-red-500' />
//                                 <p className="text-xs text-neutral-600 font-normal pt-0.6">
//                                     Sofa
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="flex items-center gap-x-4">
//                             <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
//                                 <MdOutlineChair className='w-4 h-4 text-red-700 rotate-90' />
//                                 <p className="text-xs text-neutral-600 font-normal pt-0.6">
//                                     35 seats
//                                 </p>
//                             </div>
//                         </div>

//                     </div>

//                     {/* Routes */}
//                     <div className="space-y-5">
//                         <div className="w-full flex items-center justify-between gap-x-2.5">
//                             <h1 className="text-2xl text-neutral-600 font-semibold">
//                                 {arrivalTime}
//                             </h1>

//                             <div className="flex-1 border-dashed border border-neutral-300 relative">
//                                 <p className="absolute w-14 h-14 p-0.5 top=1/2 left=1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
//                                     <Icon className="w-8 h-8 text-red-700" />
//                                 </p>
//                             </div>

//                             <h1 className="text-2xl text-neutral-600 font-semibold">
//                                 {departureTime}
//                             </h1>
//                         </div>

//                         <div className="w-full flex items-center justify-between gap-x-5">
//                             <p className="text-base text-neutral-500 font-normal">
//                                 {routeFrom}
//                             </p>
//                             <p className="text-base text-neutral-500 font-normal">
//                                 {routeTo}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
    
//             {/* price , available seats , and reserved button */}
//             <div className="w-full flex items-center justify-between">
    
//                 {/* price */}
//                 <h1 className="text-xl text-neutral-700 font-semibold">
//                     Rs: {price} <span className="text-sm text-neutral-500 font-normal">
//                         / per seat 
//                     </span>
//                 </h1>

//                 <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center gap-x-1.5">
//                     <span className="text-lg text-green-700 font-bold pt-0.5">
//                         {availableSeats}
//                     </span>  Seats are availble yet
//                 </h1>
    
//                 <Link to="/bus-ticket/detail" className="w-fit px-5 py-1.5 bg-red-700 hover:bg-transparent border-2 border-red-700 hover:border-red-700 rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-700 ease-in-out duration-300">
//                     Reserve Seat
//                 </Link>
//             </div>
//         </div>
//   )
// }

// export default TicketCard

import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { MdOutlineChair } from 'react-icons/md';
import { RiVipFill } from 'react-icons/ri';
import { TbAirConditioning } from 'react-icons/tb';

const TicketCard = ({ icon: Icon, busName, routeFrom, routeTo, arrivalTime, departureTime, price, availableSeats }) => {

  const features = [
    { icon: TbAirConditioning, label: "AC", color: "text-red-700" },
    { icon: FaStar, label: "4.5", color: "text-yellow-500" },
    { icon: RiVipFill, label: "Sofa", color: "text-red-500" },
    { icon: MdOutlineChair, label: `${availableSeats} seats`, color: "text-red-700 rotate-90" }
  ];

  return (
    <div className='w-full rounded-xl p-5 border-2 border-neutral-300 space-y-5 hover:shadow-lg transition-shadow duration-300'>
      {/* Top Section: Bus Info + Features */}
      <div className="space-y-5 border-b border-neutral-300/60 pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Bus Name */}
          <div className="flex items-center gap-x-2">
            <Icon className='h-5 w-5 text-red-700' />
            <p className="text-lg text-neutral-700 font-semibold">{busName}</p>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 flex-wrap">
            {features.map((f, idx) => (
              <div key={idx} className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-0.5">
                <f.icon className={`w-4 h-4 ${f.color}`} />
                <p className="text-xs text-neutral-600 font-normal">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Route Section */}
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-x-2.5">
            <h1 className="text-2xl text-neutral-600 font-semibold">{departureTime}</h1>
            <div className="flex-1 border-dashed border border-neutral-300 relative">
              <p className="absolute w-14 h-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 border-dashed border border-neutral-400 rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 text-red-700" />
              </p>
            </div>
            <h1 className="text-2xl text-neutral-600 font-semibold">{arrivalTime}</h1>
          </div>

          <div className="flex items-center justify-between gap-x-5">
            <p className="text-base text-neutral-500 font-normal">{routeFrom}</p>
            <p className="text-base text-neutral-500 font-normal">{routeTo}</p>
          </div>
        </div>
      </div>

      {/* Bottom Section: Price & Reserve */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl text-red-700 font-bold">Rs: {price} <span className="text-sm text-neutral-500 font-normal">/ seat</span></h1>
        <h1 className={`text-sm font-normal ${availableSeats < 5 ? 'text-red-600' : 'text-green-700'}`}>
          {availableSeats} seats {availableSeats < 5 ? 'left!' : 'available'}
        </h1>
        <Link to="/bus-ticket/detail" className="w-fit px-5 py-2 bg-red-700 hover:bg-transparent border-2 border-red-700 hover:border-red-700 rounded-xl text-sm font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-700 ease-in-out duration-300">
          Reserve Seat
        </Link>
      </div>
    </div>
  )
}

export default TicketCard;
