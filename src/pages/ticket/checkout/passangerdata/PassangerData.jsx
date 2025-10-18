import React from 'react'
import PaymentMethod from './payment/PaymentMethod'

const PassangerData = () => {
  return (
    <div className='w-full col-span-4 py-4 space-y-6'>
        <h1 className="text-xl text-neutral-700 font-semibold">
            Passanger Infomations: 
        </h1>

        <div className="space-y-7">
            <div className="w-full space-y-2">
                <label htmlFor="fullName" className="text-sm text-neutral-500 font-medium">Full Name: </label>
                <input 
                    type="text"
                    placeholder='e.g:- Uhanovitage Anjana Heshan' 
                    className="w-full px-4 h-14 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400" />
            </div>

            <div className="w-full space-y-2">
                <label htmlFor="email" className="text-sm text-neutral-500 font-medium">E-mail Address: </label>
                <input 
                    type="email"
                    placeholder='e.g:- anjana@example.gmail.com' 
                    className="w-full px-4 h-14 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400" />
            </div>

            <div className="w-full space-y-2">
                <label htmlFor="phone" className="text-sm text-neutral-500 font-medium">phone: </label>
                <input 
                    type="number"
                    placeholder='e.g:- 070-0000000' 
                    className="w-full px-4 h-14 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400" />
            </div>

            <div className="w-full space-y-2">
                <label className="text-sm text-neutral-500 font-medium">PickUp Station </label>
               
               <select className="w-full px-4 h-14 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 text-neutral-600 rounded-xl focus:outline-none focus:border-neutral-400 text-base font-normal placeholder:text-neutral-400"> 
                    <option selected disabled>
                        Choose your next Pickup station
                    </option>

                    <option value="Galle"> Galle </option>
                    <option value="Kumarakanda"> Kumarakanda </option>
                    <option value="Hikkaduwa"> Hikkaduwa </option>
                    <option value="Seenigama"> Seenigama </option>

               </select>
            </div>
        </div>

        {/* Payment methods */}
        <PaymentMethod />

    </div>
  )
}

export default PassangerData