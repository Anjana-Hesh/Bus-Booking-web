import React, { useState } from 'react'
import PaymentCard from '../../../../../components/payment/PaymentCard';
import MasterCardImage from "../../../../../assets/mastercard.png"
import VisaCardImage from "../../../../../assets/visa.png"
import { FaPlus } from 'react-icons/fa';

const PaymentMethod = () => {

    const [selectedPaymentMethod , setSelectedPaymentMethod] = useState('');

    const handleChange = (e) => {
        setSelectedPaymentMethod(e.target.value);
    }

    return (
        <div className='w-full space-y-3'>
            <h6 className="text-sm text-neutral-600 font-medium">
                Select Payment method
            </h6>

            <div className="w-full grid grid-cols-2 gap-10">
                <PaymentCard 
                    selectedPayment = {selectedPaymentMethod}
                    value = {'mastercard'}
                    onChange = {handleChange}
                    cardHolderName = {"Anjana heshan"}
                    cardNumber = {"0456"}
                    cardImage = {MasterCardImage}
                />

                <PaymentCard 
                    selectedPayment = {selectedPaymentMethod}
                    value = {'visacard'}
                    onChange = {handleChange}
                    cardHolderName = {"Anjana heshan"}
                    cardNumber = {"00865"}
                    cardImage = {VisaCardImage}
                />
            </div>

            <div className="w-full flex justify-end">
                <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-red-500">
                    <FaPlus />
                    <p className="capitalize"> Add new card </p>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod