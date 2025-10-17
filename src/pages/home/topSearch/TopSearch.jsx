import React from 'react'
import RootLayout from '../../../layouts/rootLayout'
import TopSearchCard from '../../../components/topSearch/TopSearchCard'

const TopSearch = () => {
  return (
    <RootLayout className="space-y-12">
        {/* Tag */}
      <div className="w-full flex items-center justify-center text-center">
        <h1 className="text-3xl text-neutral-800 font-bold">
          Top Search <span className="text-red-700">Routes</span>
        </h1>
      </div>

      {/* Top Search Tickets routes card */}
      <div className="w-full grid grid-cols-3 gap-5">
        <TopSearchCard routeFrom={"Galle"} routeTo={"Colombo"} timeDuration={"2h 30min"} price={"785.00"} />
        <TopSearchCard routeFrom={"Elpitiya"} routeTo={"Galle"} timeDuration={"40min"} price={"350.00"} />
        <TopSearchCard routeFrom={"Galle"} routeTo={"Maththala"} timeDuration={"3h 30min"} price={"785.00"} />
        <TopSearchCard routeFrom={"Elpitiya"} routeTo={"Colombo"} timeDuration={"2h 30min"} price={"550.00"} />
        <TopSearchCard routeFrom={"Elpitya"} routeTo={"Makumbura"} timeDuration={"1h"} price={"375.00"} />
        <TopSearchCard routeFrom={"Galle"} routeTo={"Makumbura"} timeDuration={"1h 30min"} price={"600.00"} />
      </div>
    </RootLayout>
  )
}

export default TopSearch