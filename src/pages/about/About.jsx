import React from 'react'
import { FaBus, FaShieldAlt, FaClock, FaAward, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'

const About = () => {
    const features = [
        {
            icon: <FaBus className="w-8 h-8" />,
            title: "Wide Network",
            description: "Access to thousands of buses across the country"
        },
        {
            icon: <FaShieldAlt className="w-8 h-8" />,
            title: "Safe & Secure",
            description: "100% secure payment and verified bus operators"
        },
        {
            icon: <FaClock className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock customer service for your convenience"
        },
        {
            icon: <FaAward className="w-8 h-8" />,
            title: "Best Prices",
            description: "Competitive fares with exclusive deals and offers"
        }
    ]

    const stats = [
        { number: "10M+", label: "Happy Travelers" },
        { number: "5000+", label: "Bus Partners" },
        { number: "500+", label: "Cities Connected" },
        { number: "50K+", label: "Daily Bookings" }
    ]

    return (
        <div className='min-h-screen w-full bg-gradient-to-br from-orange-50 via-white to-orange-50'>
            {/* Hero Section */}
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12'>
                <div className='text-center mb-16'>
                    <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
                        About <span className="text-orange-600">BusBooking</span>
                    </h1>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                        Your trusted companion for comfortable and affordable bus travel across the nation
                    </p>
                </div>

                {/* Stats Section */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'>
                    {stats.map((stat, index) => (
                        <div key={index} className='bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow'>
                            <div className='text-3xl md:text-4xl font-bold text-orange-600 mb-2'>
                                {stat.number}
                            </div>
                            <div className='text-neutral-600 font-medium'>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Story Section */}
                <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16'>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
                    <div className="space-y-4 text-neutral-700 text-lg leading-relaxed">
                        <p>
                            Founded in 2020, BusBooking started with a simple vision: to make bus travel booking as easy as a few clicks. We recognized the challenges travelers faced—long queues, unreliable information, and limited options.
                        </p>
                        <p>
                            Today, we've grown into one of the leading bus booking platforms, connecting millions of travelers with thousands of trusted bus operators across the country. Our technology-driven approach has revolutionized the way people book their bus journeys.
                        </p>
                        <p>
                            We're committed to making your travel experience seamless, from browsing routes to reaching your destination safely. Every booking, every journey, and every satisfied traveler motivates us to do better.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className='mb-16'>
                    <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
                        Why Choose Us
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                        {features.map((feature, index) => (
                            <div key={index} className='bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1'>
                                <div className='text-orange-600 mb-4'>
                                    {feature.icon}
                                </div>
                                <h3 className='text-xl font-bold text-neutral-900 mb-2'>
                                    {feature.title}
                                </h3>
                                <p className='text-neutral-600'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white shadow-xl'>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg leading-relaxed opacity-95">
                            To provide every traveler with a reliable, convenient, and affordable bus booking experience while empowering bus operators with cutting-edge technology to grow their business.
                        </p>
                    </div>
                    <div className='bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 text-white shadow-xl'>
                        <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                        <p className="text-lg leading-relaxed opacity-95">
                            To become the most trusted and preferred bus booking platform globally, connecting every corner of the world with safe, sustainable, and smart transportation solutions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About