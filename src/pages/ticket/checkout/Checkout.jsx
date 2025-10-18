import React from 'react'
import TopLayout from '../../../layouts/topPage/TopLayout'
import RootLayout from '../../../layouts/rootLayout'
import PassangerData from './passangerdata/PassangerData'

const Checkout = () => {


    return (
        <div className='w-full space-y-12 pb-16'>
            {/* TopLayout */}
            <TopLayout 
                bgImg={"https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"}
                title = {"Checkout"}
            />
            
            <RootLayout className="space-y-12 w-full pb-16"> 
                <div className="w-full grid grid-cols-7 items-start gap-44 relative">
                    
                    {/*  Passanger details */}
                    <PassangerData />

                    {/* Ticket report status */}

                </div>
            </RootLayout>
        </div>
    )
}

export default Checkout