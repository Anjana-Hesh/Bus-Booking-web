import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';

const Navbar = () => {

    const [scrollPosition , setScrollPosition] = useState(0)
    const [isVisible , setIsVisible] = useState(true)
    const [open , setOpen] = useState(false)

    // Nav bar Items ...
     const navItems = [
        {label: "Home" , link: "/"},
        {label: "Services" , link: "/services"},
        {label: "Tickets" , link: "/tickets"},
        {label: "About" , link: "/about"},
     ]

     // Handle click open
     const handleOpen = () => {
        setOpen(!open);
     }

     const handleClose = () => {
        setOpen(false);
     }


     // To make the navbar sticky and hide when scrolling up and showing when scrollin down 
     useEffect(() => {

        const handleScroll = () => {
            const currentScrollState = window.scrollY;

            // dittermine the visibility of the nav bar  based on scroll position
            if(currentScrollState > scrollPosition && currentScrollState > 50){
                setIsVisible(false)   // hide the navbar when scroolind up
            }else{
                setIsVisible(true)  // show the navbar
            }

            setScrollPosition(currentScrollState);
        }
        
        window.addEventListener('scroll' , handleScroll);
        
        return () => {
            window.removeEventListener('scroll' , handleScroll);
        }
    } , [scrollPosition])

    return (
        <nav className={`w-full h-[8ch] fixed top-0 left-0 lg:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50 ${isVisible ? "translate-y-0" : "-translate-y-full"} ${scrollPosition > 50 ? "bg-violet-500" : "bg-neutral-100/10"}`}>
            <div className="w-full h-full flex items-center justify-between">
                {/* Logo section */}
                <Link to="/" className='text-4xl text-red-500 font-bold'>
                    Bus
                </Link>
    
                {/* burgur button */}
                <div className="w-fit md:hidden flex items-center justify-center cursor-pointer flex-col gap-1 text-neutral-700" onClick={handleOpen}>
                    {
                        open
                        ? <FaX className='w-5 h-5' />
                        : <FaBars className='w-5 h-5' />
                    }
                </div>

                {/* nav links and button */}
                <div className={`${open ? "flex absolute top-20 left-0 w-full h-auto md:relative" : "hidden"} flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-0 sm:p-4 p-4 justify-end md:bg-transparent bg-neutral-50 md:border-transparent border-neutral-200 md:shadow-none sm:shadow-md shadow-md rounded-xl`}>
                    {/* navlinks */}
                    <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-500 font-normal">

                        {navItems.map((item , ind) => (
                            <li key={ind}>
                                <Link to={item.link} className='hover:text-red-500 ease-in-out duration-300'>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {/* button */}
                    <div className="flex items-center justify-center">
                        <div className="btn md:w-fit w-full md:px-4 px-6 md:py-1 py-2 5 bg-red-500 border hover:bg-transparent border-red-500 hover:border-red-500 md:rounded-full rounded-xl text-base font-normal text-neutral-50 hover:text-red-500 ease-in-out duration-300">
                            Sign In
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
