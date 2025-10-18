import React from 'react'
import TopLayout from '../../../layouts/topPage/TopLayout'
import RootLayout from '../../../layouts/rootLayout'
import { Link } from 'react-router-dom'
import WarningAlert from '../../../components/alertMessage/WarningAlert'
import BusSeat from './seat/busseat/BusSeat'
import ToggleBtn from '../../../components/togglebtn/ToggleBtn'
import Amenities from './amenities/Amenities'
import ReservationPolicy from './reservationpolicy/ReservationPolicy'

const Detail = () => {

    const message = (
        <>
            One Individualy can book 10 seats. if You want to book more than 10 Seats, 
            Please <Link to={"/support-team"} className='text-yellow-700 font-medium'> Contact Our Supportive Team.</Link> 
        </>
    )
    

    return (
        <div className='w-full space-y-12 pb-16'>
            {/* TopLayout */}
            <TopLayout 
                bgImg={"https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"}
                title = {"Bus Detail"}
            />
            
            <RootLayout className="space-y-12 w-full pb-16"> 
                {/* seats layout and selection action */}
                <div className="w-full space-y-8">

                    {/* Warning message */}
                    <WarningAlert message={message} />

                    {/* seats layout */}
                    <BusSeat />

                </div>

                {/* bus details */}
                <div className="w-full flex items-center justify-center flex-col gap-8 text-center">

                    {/* short description about the bus */}
                    <p className="text-base text-neutral-500 font-normal text-justify">
                        This is a cool bus . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic ex laudantium animi quas veritatis a vitae, aliquam quasi enim exercitationem sit molestias nulla unde?

                        <span className="text-lg text-neutral-600 font-medium ml-2">
                            Want to see More about the bus ..?
                        </span>
                    </p>

                    {/* buttons */}
                    <div className="w-full flex items-center justify-center gap-6 flex-col">
                        <ToggleBtn
                            buttonText={"See bus details"}
                            buttonTextHidden={"Hide bus details"}
                        >
                            <div className="w-full space-y-10">

                                {/* reservation policy & amenities */}
                                <div className="w-full grid grid-cols-7 gap-20">

                                    {/* amenities */}
                                    <Amenities />

                                    {/* reservation policy */}
                                    <ReservationPolicy />

                                </div>

                                {/* bus images */}
                            
                            </div>

                        </ToggleBtn>
                    </div>

                </div>
            </RootLayout>
            
        </div>
    )
}

export default Detail