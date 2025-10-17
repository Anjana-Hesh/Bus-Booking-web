import React from 'react'
import {motion} from 'framer-motion'
import { TbArrowsExchange } from 'react-icons/tb'
import { FaMapMarkedAlt, FaSearch } from 'react-icons/fa'

const Search = () => {
  return (
    <motion.div
        className='w-full bg-neutral-50/20 border-20 border-neutral-300 shadow-lg rounded-xl p-5'
        initial={{opacity: 0 , y: -800}}
        animate={{opacity:1 , y: 0}}
        exit={{opacity: 0 , y: -800}}
        transition={{duration: 1.5 , ease: 'easeInOut'}}
    >
        <div className="w-full flex items-center gap-5 justify-between">
            {/* From and to input section */}
            <div className="w-[60%] flex items-center gap-5 relative">

                {/* From */}
                <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-10 flex items-center gap-x-5 rounded-lg">
                    <input type="text" placeholder='From ...' className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                    <div className="w-6 h-6 text-neutral-400">
                        <FaMapMarkedAlt className='w-full h-full' />
                    </div>
                </div>

                {/* To */}
                <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-10 flex items-center gap-x-5 rounded-lg">
                    <input type="text" placeholder='To ...' className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                    <div className="w-6 h-6 text-neutral-400">
                        <FaMapMarkedAlt className='w-full h-full' />
                    </div>
                </div>

                {/* Exchange button */}
                <button className="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-700 z-10">
                    <TbArrowsExchange className='w-full h-full text-neutral-50' />
                </button>

            </div>

            {/* date and button section */}
            <div className="flex-1 h-14 flex items-center gap-5">

                {/* date */}
                <div className="flex-1 h-14 border border-neutral-300 bg-white-70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                    <input type="date" className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                </div>

                {/* search */}
                <button className="w-fit px-5 h-12 bg-red-700 hover:bg-transparent border-2 border-red-700 hover:border-red-700 rounded-xl text-base font-medium text-neutral-50 flex items-center justify-center gap-x-2 hover:text-red-700 ease-in-out duration-300">
                    <FaSearch />
                    Search
                </button>
            </div>

        </div>
    </motion.div>
  )
}

export default Search
