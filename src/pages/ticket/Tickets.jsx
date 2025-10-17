import React from 'react'
import TopLayout from '../../layouts/topPage/TopLayout'
import RootLayout from '../../layouts/rootLayout'
import {motion} from 'framer-motion'
import Search from '../home/hero/search/Search'
import Filter from './filter/Filter'
import SearchResult from './searchResult/SearchResult'

const Tickets = () => {
  return (
    <div className='w-full space-y-12 pb-16'>
        {/* TopLayout */}
        <TopLayout 
        bgImg={"https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"}
        title = {"Reserve Your Ticket"}
        />
        
        <RootLayout className="space-y-12 relative ">

            {/* search section */}

            <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
                <motion.h1 
                    className='text-3xl text-neutral-700 font-semibold'
                    initial={{opacity: 0 , y: -800}}
                    animate={{opacity:1 , y: 0}}
                    exit={{opacity: 0 , y: -800}}
                    transition={{duration: 1.35 , ease: 'easeInOut'}}
                >
                    Want to change the route ...?

                    {/*Then search */}
                    <Search />

                </motion.h1>
            </div>

            {/* searched bus ticket */}

            <div className="w-full h-auto grid grid-cols-4 gap-16 relative">

                {/* filter secction */}
                <div className="col-span-1">
                    <Filter className="space-y-4 sticky top-52 z-20" />
                </div>

                {/* search ticket */}
                <SearchResult /> 
                
            </div>

        </RootLayout>

    </div>
  )
}

export default Tickets