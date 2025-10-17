import React, { useEffect } from 'react'

const RootLayout = ({children , className}) => {

    // automaticaly scroll to top when you navigate to another page or new page .
    useEffect(() => {
        window.scrollTo(0,0);
    })

    return (
        <div className={`w-full lg:px-24 sm:px-7 px-4 ${className}`}>
            {children}
        </div>
    )
}

export default RootLayout
