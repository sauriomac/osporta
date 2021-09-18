import React from 'react'

const Modal = ({todo}) => {
    return (
            <div className="resize h-96 w-100 mx-44 rounded-lg bg-gray-50 bg-opacity-30 shadow-2xl z-5">
            <div className="rounded-t-lg h-15 py-3 flex justify-start gap-1  items-center bg-gray-100 bg-opacity-30 ">
            <div className="ml-2 z-50 rounded-full h-4 w-4 bg-red-600 opacity-100" ></div>
            <div className="z-50 rounded-full h-4 w-4 bg-yellow-500 opacity-100" ></div>
            <div className="z-50 rounded-full h-4 w-4 bg-green-600 opacity-100" ></div>
            <h2></h2>
        </div>
        </div>
        
    )
}

export default Modal
