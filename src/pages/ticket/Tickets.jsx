import React from 'react'
import TopLayout from '../../layouts/topPage/TopLayout'
import RootLayout from '../../layouts/rootLayout'
import { motion } from 'framer-motion'
import Search from '../home/hero/search/Search'
import Filter from './filter/Filter'
import SearchResult from './searchResult/SearchResult'

const Tickets = () => {
  return (
    <div className='w-full space-y-12 pb-16'>

      {/* Top Banner */}
      <TopLayout 
        bgImg="https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"
        title="Reserve Your Ticket"
      />

      <RootLayout className="space-y-12 relative">

        {/* Search Section */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-6 items-center justify-center flex-col sticky top-0 z-30 shadow-sm">
          <motion.h1 
            className='text-3xl text-neutral-700 font-semibold'
            initial={{opacity: 0 , y: -50}}
            animate={{opacity:1 , y: 0}}
            transition={{duration: 1}}
          >
            Want to change the route ...?
          </motion.h1>

          <motion.div
            initial={{opacity:0, y: 20}}
            animate={{opacity:1, y:0}}
            transition={{duration: 1, delay: 0.5}}
          >
            <Search />
          </motion.div>
        </div>

        {/* Ticket Search & Filter */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">

          {/* Filter Sidebar */}
          <div className="col-span-1">
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-24">
              <Filter />
            </div>
          </div>

          {/* Search Results */}
          <div className="col-span-1 md:col-span-3 space-y-6">
            <motion.div
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8}}
            >
              <SearchResult />
            </motion.div>
          </div>

        </div>

      </RootLayout>

    </div>
  )
}

export default Tickets
