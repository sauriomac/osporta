import React from 'react'

const PortafolioList = ({id,title, active, setselect}) => {
    return (
        <div>
            <li className={active ? "act" : "notact"}
                 onClick={()=> setselect(id)}
            >{title}
            </li>
        </div>
    )
}

export default PortafolioList
