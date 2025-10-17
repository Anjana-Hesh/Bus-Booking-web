import React from 'react'
import Hero from './hero/Hero'

const Home = () => {
  return (
    <>
      <div className='space-y-16 w-full min-h-screen pb-16'>
       {/* Hero */}
        {/* <div className='h-screen w-full flex items-center justify-center'> 
            <h1 className="text-5xl text-neutral-950 font-bold">
            This is Home Page Section ...
            </h1>  
        </div> */}
        
        {/* About */}
      {/* <div className='h-screen w-full flex items-center justify-center'> 
        <h1 className="text-5xl text-neutral-950 font-bold">
          This is About Page Section ...
        </h1>  
      </div> */}

      <Hero />

      </div>
    </>
  )
}

export default Home
