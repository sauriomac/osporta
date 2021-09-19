import React, { useState } from 'react';
import { FaGhost, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMailOption } from "react-icons/gr";
import { FaBars, FaTimes } from 'react-icons/fa'
import moment from 'moment';


const TopBar = ({ toggle }) => {
    
    const today     = moment().format('LLL')
    const [click, setclick] = useState(false)
    const handleOpen = () => setclick(!click)

    return (
        <div className="fixed z-50 font-mono w-full h-8 py-6 flex justify-between  items-center bg-gray-700 bg-opacity-60">
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
            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                <a onClick={handleOpen} href="#banner" className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Home</a>
                <a onClick={handleOpen} href="#Works" className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Works</a>
                <a onClick={handleOpen} href="#Contact" className="text-xs text-gray-50 text-current text-right mr-4 drop-shadow-xl opacity-50 ">Contact</a>
                <a href="mailto:lrodrigoespinoza@gmail.com"><GrMailOption className="opacity-50 mr-2" /></a>
                <a href="https://github.com/sauriomac?tab=repositories"><FaGithub className="opacity-50 mr-2" /></a>
                <a href="https://www.linkedin.com/in/rodrigoespinozam/"><FaLinkedin className="opacity-50 mr-2" /></a>

                <p className="hidden lg:block text-xs text-gray-50 text-current text-right mr-2 drop-shadow-xl opacity-50 ">{today}</p>

            </div>
        </div>
    )
}

export default TopBar
