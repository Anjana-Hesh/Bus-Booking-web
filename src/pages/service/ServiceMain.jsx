// src/pages/services/Services.jsx
import React from 'react';
import RootLayout from '../../layouts/rootLayout';
import ServiceCard from '../../components/service/ServiceCard';
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri';
import { PiHeadsetFill } from 'react-icons/pi';

const Services = () => {
  const services = [
    {
      icon: RiSecurePaymentLine,
      title: "Secure Payments",
      decs: "All transactions are encrypted and completely safe for your bookings."
    },
    {
      icon: PiHeadsetFill,
      title: "24/7 Customer Support",
      decs: "Our friendly support team is available anytime for your help."
    },
    {
      icon: RiRefund2Line,
      title: "Easy Refunds",
      decs: "Change of plans? Get hassle-free refunds for your tickets."
    },
  ];

  return (
    <RootLayout className="space-y-12 py-16">
      
      {/* Page Heading */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-red-700">Our Services</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Experience the best bus booking platform with convenience, security, and 24/7 support.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <ServiceCard 
            key={idx} 
            icon={service.icon} 
            title={service.title} 
            decs={service.decs} 
          />
        ))}
      </div>
    </RootLayout>
  )
}

export default Services;
