import React from "react";
import Hero from "./hero/Hero";
import Services from "./services/Services";
import TopSearch from "./topSearch/TopSearch";

const Home = () => {
  return (
    <>
      <div className="space-y-32 w-full min-h-screen pb-16">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <Services />

        {/* TopSearch */}
        <TopSearch />

        
      </div>
    </>
  );
};

export default Home;
