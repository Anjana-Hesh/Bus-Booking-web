import React, { useEffect, useRef, useState } from 'react'

const ToggleBtn = ({buttonText , buttonTextHidden , children}) => {

    const [isVisible , setIsVisible] = useState(true)
    const toggleRef = useRef(null)

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Handle the click out side of the togle button
    const handleOutSides = (e) => {
        if(toggleRef.current && !toggleRef.current.conteins(e.target)){
            setIsVisible(false)
        }
    }

    useEffect (() => {
        // add event listener
        document.addEventListener('mousedown' , handleOutSides);
        return () => {
            removeEventListener('mousedown' , handleOutSides);
        }
    } ,[])

    return (
        <div className='w-full h-auto' ref={toggleRef}>
            <button
                onClick={toggleVisibility}
                className={`w-fit px-4 py-2 border-2 border-red-600 ${!isVisible ? "bg-red-700 text-neutral-50" : "border-red-600 bg-transparent  text-red-500"} rounded-lg transition`}
            >
                {isVisible ? buttonTextHidden : buttonText}
            </button>

            {isVisible && (
                <div className='mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm'>
                    {children}
                </div>
            )}
        </div>
    )
}

export default ToggleBtn