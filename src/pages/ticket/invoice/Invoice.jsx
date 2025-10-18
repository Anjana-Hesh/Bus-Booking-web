import React, { useRef } from 'react'
import RootLayout from '../../../layouts/rootLayout'
import TopLayout from '../../../layouts/topPage/TopLayout'
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import PassangerInvoice from './passangerinvoice/PassangerInvoice';
import CompanyInvoice from './company/CompanyInvoice';

const Invoice = () => {

    const invoiceRef = useRef(null);

    const handleDownload = async () => {
        if(invoiceRef.current === null) return;

// need to istall {npm install html-to-image downloadjs} library

        try{
            // convert the invoice to an image
            const dataUrl = await toPng(invoiceRef.current);

            //download the image
            download(dataUrl, "bus-ticket-invoice.png");
        }catch(error){
            console.error("Error while downloading the invoice. " ,error);
        }
    }

    return (
        <div className='w-full space-y-12 pb-16'>
            {/* TopLayout */}
            <TopLayout 
                bgImg={"https://t4.ftcdn.net/jpg/00/15/53/79/360_F_15537925_5qUqgBbDSQHCI5DeP7M0z88ouNIHdeKY.jpg"}
                title = {"Collect your Invoice"}
            />
            
            <RootLayout className="space-y-12 w-full pb-16"> 
                <div className="w-full flex items-center justify-center">
                    
                    {/* invoice card */}
                    <div 
                        ref={invoiceRef}
                        className="w-[90%] grid grid-cols-5 bg-white rounded-3xl border border-neutral-200 shadow-sm relative"
                    >
                        {/* left side (for passenger)*/}
                        <PassangerInvoice />

                        {/* right side (for company)*/}
                        <CompanyInvoice />

                        {/* Cut circle */}
                        <div className="absolute top-3 -right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />
                        
                        <div className="absolute top-3 -right-[18.8%] h-6 w-6 rounded-full bg-neutral-50 border border-neutral-50" />

                    </div>

                </div>
                {/* download button */}
                <div className="w-full flex justify-center items-center">
                    <button onClick={handleDownload} className="w-fit px-8 bg-red-500 text-neutral-50 font-bold text-lg rounded-lg">Download Invoice</button>
                </div>
            </RootLayout>
        </div>
    )
}

export default Invoice