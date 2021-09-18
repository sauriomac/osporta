import React, { useState } from 'react';
import { FaGhost,FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMailOption } from "react-icons/gr";
import {FaBars,FaTimes } from 'react-icons/fa'
//moment is necesary import


const TopBar = ({toggle}) => {

    const [click, setclick] = useState(false)
    const handleOpen =()=>setclick(!click)
    
    return (
        <div  className="fixed z-50 font-mono w-full h-8 py-6 flex justify-between  items-center bg-gray-700 bg-opacity-60">
            <div className=" mx-4 flex flex-row">
            <a href="#banner" onClick={toggle} ><FaGhost className=" mx-2 text-gray-50 text-current drop-shadow-xl opacity-50  " /></a>
            <span className=" text-xs ml-2 text-gray-50 text-current drop-shadow-xl opacity-50  " >
             Rodrigo Espinoza </span>
            </div>
            <div className="menu-icon" onClick={handleOpen}>
                        {
                            click ? <FaTimes className="text-white opacity-50 " /> : <FaBars className="text-white opacity-50 " />
                        }
                    </div>
            <div  className={click ? 'nav-menu active': 'nav-menu'}>
            <a onClick={handleOpen} href="#banner"className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Home </a>
            <a onClick={handleOpen} href="#Works"className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Works </a>
            <a onClick={handleOpen} href="#Contact"className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Contact</a>
                <GrMailOption className="opacity-50 mr-2" />
                <FaGithub className="opacity-50 mr-2" />
            <FaLinkedin className="opacity-50 mr-2"/>
            
            <p className="hidden lg:block text-xs text-gray-50 text-current text-right mr-2 drop-shadow-xl opacity-50 ">Tue Nov 10 9:41 am </p>

            </div>
        </div>
    )
}

export default TopBar
