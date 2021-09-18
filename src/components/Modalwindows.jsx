import React from 'react'

const Modalwindows = ({show, Onclose}) => {
    if(show){
        return null
    }
    return (
        
        <div className="resize h-96 w-full mx-60 rounded-lg bg-gray-50 bg-opacity-30 shadow-2xl ">
            <div className="rounded-t-lg h-15 py-3 flex justify-start gap-1  items-center bg-gray-100 bg-opacity-30 ">
            <div className="ml-2 z-50 rounded-full h-4 w-4 bg-red-600 opacity-100" onClick={Onclose} ></div>
            <div className="z-50 rounded-full h-4 w-4 bg-yellow-500 opacity-100" ></div>
            <div className="z-50 rounded-full h-4 w-4 bg-green-600 opacity-100" ></div>
            
        </div>
        </div>
    )
}

export default Modalwindows
