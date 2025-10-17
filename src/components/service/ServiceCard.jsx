import React from 'react'

const ServiceCard = ({icon: Icon , title ,decs}) => {
  return (
    <div className='w-full bg-gradient-to-br from-white to-neutral-100 hover:from-neutral-50 hover:to-neutral-200 border border-neutral-200 hover:border-neutral-300 shadow-lg hover:shadow-2xl rounded-2xl p-8 flex items-center justify-center gap-5 flex-col text-center cursor-pointer ease-in-out duration-300 transform hover:-translate-y-2 group'>
        <div className="w-full flex items-center justify-center gap-x-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-700 shadow-md group-hover:shadow-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl text-neutral-800 font-bold group-hover:text-red-700 transition-colors duration-300">
                {title}
            </h1>
        </div>
        <p className="text-sm text-neutral-600 font-normal leading-relaxed">
            {decs}
        </p>
    </div>
  )
}

export default ServiceCard