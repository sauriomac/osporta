import React, { useEffect, useState } from 'react';
import { FaGithub,FaChrome} from 'react-icons/fa';
import PortafolioList from './PortafolioList';
import {
    VuePortafolio,
    ReactPortafolio,
    DjangoPortafolio,
    FlaskPortafolio,
    FullPortafolio
} from '../../src/data';

const Works = () => {
    const list = [
        {
            id: "vue",
            title: "Vue"
        },
        {
            id: "react",
            title: "React"
        },
        {
            id: "django",
            title: "Django"
        },
        {
            id: "flask",
            title: "Flask"
        },
        {
            id: "full",
            title: "Fullstack"
        }
    ]
    const [select, setselect] = useState("vue");
    const [data, setData] = useState([]);

    useEffect(() => {
        switch (select) {
            case "vue":
                setData(VuePortafolio);
                break;
            case "react":
                setData(ReactPortafolio);
                break;
            case "django":
                setData(DjangoPortafolio);
                break;
            case "flask":
                setData(FlaskPortafolio);
                break;
            case "full":
                setData(FullPortafolio);
                break;
            default:
                setData(VuePortafolio);


        }
    }, [select])

    return (
        <div className="h-full my-44 flex flex-col py-6 w-full" id="Works">
        <div className="bg-white flex flex-col items-center justify-center flex-wrap h-full mt-0" >
            <h1 className="font-sm text-4xl py-20">Portafolio</h1>
            <ul className="m-10 p-0 list-none flex"  >
                {list.map(item => (
                    <PortafolioList
                        key={item.id}
                        title={item.title}
                        active={select === item.id}
                        setselect={setselect}
                        id={item.id} />
                ))
                }
            </ul>
            </div>
            <div className="h-full rounded flex flex-row items-center justify-center flex-wrap gap-3">
                {data.map((dat) => (
                    <div className="contItem"  key={dat.id}>
                        <img className=" hover:opacity-5 rounded-lg h-32 w-60" src={dat.imgURL} alt="" />

                        <div className="item rounded-lg ">
                            <h1 className="text-sm font-mono">{dat.title}</h1>
                        
                            <a className="mx-2" href={dat.GitURL}><FaGithub className="hover:text-yellow-300" /></a>
                            <a href={dat.WebURL}><FaChrome className="hover:text-yellow-300" /></a>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Works