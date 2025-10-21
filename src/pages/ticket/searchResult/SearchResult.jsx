// import React from 'react'
// import TicketCard from '../../../components/ticket/TicketCard'
// import { FaBus } from 'react-icons/fa'
// import { GrRefresh } from 'react-icons/gr'
// import { GiJeep } from 'react-icons/gi'

// const SearchResult = () => {
//   return (
//     <div className='col-span-3 space-y-10 pt-11'>
//         <div className="space-y-6">
//           <TicketCard icon={FaBus} busName={"Hashari"} routeFrom={"Galle"} routeTo={"Colombo"} arrivalTime={"11.30 AM"} departureTime={"8.00 AM"} price={"750.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Hashari"} routeFrom={"Galle"} routeTo={"Makumbura"} arrivalTime={"10.30 AM"} departureTime={"9.00 AM"} price={"250.00"} availableSeats={"15"} />
//           <TicketCard icon={GiJeep} busName={"Karunarathne"} routeFrom={"Elpitiya"} routeTo={"Galle"} arrivalTime={"7.40 AM"} departureTime={"7.00 AM"} price={"250.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Hashari"} routeFrom={"Galle"} routeTo={"Elpitiya"} arrivalTime={"09.10 AM"} departureTime={"8.30 AM"} price={"550.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Dam-Rajina"} routeFrom={"Galle"} routeTo={"Colombo"} arrivalTime={"2.30 PM"} departureTime={"11.00 AM"} price={"750.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Weli-Rajina"} routeFrom={"Colombo"} routeTo={"Galle"} arrivalTime={"4.30 PM"} departureTime={"7.00 PM"} price={"750.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Dumburu-Lamissi"} routeFrom={"Colombo"} routeTo={"Elpitiya"} arrivalTime={"8.30 PM"} departureTime={"6.00 PM"} price={"550.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Hashari"} routeFrom={"Galle"} routeTo={"Colombo"} arrivalTime={"11.30 AM"} departureTime={"8.00 AM"} price={"750.00"} availableSeats={"15"} />
//           <TicketCard icon={FaBus} busName={"Hashari"} routeFrom={"Galle"} routeTo={"Colombo"} arrivalTime={"11.30 AM"} departureTime={"8.00 AM"} price={"750.00"} availableSeats={"15"} />
//         </div>

//         <div className="w-full flex items-center justify-center">
//           <button className="w-fit px-8 py-3 bg-red-700 hover:bg-transparent border-2 border-red-700 hover:border-red-700 rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-700 ease-in-out duration-300">
//              <GrRefresh />
//              Load More ...
//           </button>
//         </div>
//     </div>
//   )
// }

// export default SearchResult

// src/pages/tickets/searchResult/SearchResult.jsx
import React, { useState } from 'react';
import TicketCard from '../../../components/ticket/TicketCard';
import { FaBus } from 'react-icons/fa';
import { GiJeep } from 'react-icons/gi';
import { GrRefresh } from 'react-icons/gr';
import { motion } from 'framer-motion';

const allTickets = [
  { icon: FaBus, busName: "Hashari", routeFrom: "Galle", routeTo: "Colombo", departureTime: "8.00 AM", arrivalTime: "11.30 AM", price: "750.00", availableSeats: 15 },
  { icon: FaBus, busName: "Hashari", routeFrom: "Galle", routeTo: "Makumbura", departureTime: "9.00 AM", arrivalTime: "10.30 AM", price: "250.00", availableSeats: 15 },
  { icon: GiJeep, busName: "Karunarathne", routeFrom: "Elpitiya", routeTo: "Galle", departureTime: "7.00 AM", arrivalTime: "7.40 AM", price: "250.00", availableSeats: 3 },
  { icon: FaBus, busName: "Hashari", routeFrom: "Galle", routeTo: "Elpitiya", departureTime: "8.30 AM", arrivalTime: "09.10 AM", price: "550.00", availableSeats: 15 },
  { icon: FaBus, busName: "Dam-Rajina", routeFrom: "Galle", routeTo: "Colombo", departureTime: "11.00 AM", arrivalTime: "2.30 PM", price: "750.00", availableSeats: 2 },
  { icon: FaBus, busName: "Weli-Rajina", routeFrom: "Colombo", routeTo: "Galle", departureTime: "7.00 PM", arrivalTime: "4.30 PM", price: "750.00", availableSeats: 15 },
  { icon: FaBus, busName: "Dumburu-Lamissi", routeFrom: "Colombo", routeTo: "Elpitiya", departureTime: "6.00 PM", arrivalTime: "8.30 PM", price: "550.00", availableSeats: 15 },
  { icon: FaBus, busName: "Hashari", routeFrom: "Galle", routeTo: "Colombo", departureTime: "8.00 AM", arrivalTime: "11.30 AM", price: "750.00", availableSeats: 15 },
];

const SearchResult = () => {
  const [tickets, setTickets] = useState(allTickets.slice(0, 5));

  const loadMore = () => {
    const nextTickets = allTickets.slice(tickets.length, tickets.length + 5);
    setTickets([...tickets, ...nextTickets]);
  }

  return (
    <div className='col-span-3 space-y-10 pt-11'>
      <div className="space-y-6">
        {tickets.map((ticket, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TicketCard {...ticket} />
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {tickets.length < allTickets.length && (
        <div className="w-full flex items-center justify-center">
          <button onClick={loadMore} className="w-fit px-8 py-3 bg-red-700 hover:bg-transparent border-2 border-red-700 hover:border-red-700 rounded-xl text-base font-normal text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-700 ease-in-out duration-300">
            <GrRefresh />
            Load More ...
          </button>
        </div>
      )}
    </div>
  )
}

export default SearchResult;
