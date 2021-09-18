import React from 'react';
import Typical from 'react-typical'
// import TopBar  from './TopBar'

const Banner = () => {
    return (
        <div className=" z-50 py-6 h-screen lg:w-screen md:w-screen sm:w-screen bg-gradient-to-bl from-red-300 via-purple-600  to-red-600 " id="banner">
           
            <div className="pt-36">
        
        <h1 className="ml-10 lg:text-6xl md:text-4xl text-left text-white font-mono h-30">Hi There, </h1>
        <h1 className="ml-10  lg:text-6xl md:text-4xl text-left text-white font-mono h-30">Im RODRIGO ESPINOZA</h1>
        
        <Typical className=" lg:text-3xl md:text-2xl text-white bold font-sans ml-10"
          steps={['Im frontend developer', 1000, 'Im python developers', 500]}
          loop={Infinity}
          wrapper="p"
        />
        <button className="mt-8 animate-bounce shadow-lg rounded mx-10 px-5 py-2 bg-red-500 text-white  cursor-pointer"><a href="#Works">More...</a>.</button>
        
        </div>
        </div>
    )
}

export default Banner
