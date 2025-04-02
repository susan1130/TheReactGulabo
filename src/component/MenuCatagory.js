
//import { useState } from "react";
import AccordianList from "./AccordianList";

const MenuCatagory = ({data, showList, setShowIndex, setFlag}) =>{

    //const [flag, setFlag] = useState(null);

    const accordianFold = () =>{
        setShowIndex();
        //setFlag();
    };
    return(
        <div className="w-10/12 mx-auto my-6 shadow-md bg-gray-50 rounded-md">  
           <div className="flex justify-between cursor-pointer" onClick={accordianFold}>
                <span className="text-md font-bold text-violet-700 m-2">{data.title} ({data.itemCards.length})</span>
                <span className="mx-4 m-2">&#9660;</span>
           </div>
           <div className="px-2">
                <span>
                    { showList && <AccordianList items = {data.itemCards}/> }
                </span>
           </div>
        </div>
    );
};

export default MenuCatagory;


{/*<div className="mx-10 px-8 bg-gray-20">*/}
{/*w-6/12 mx-auto my-6 shadow-lg bg-gray-50 rounded-xl*/}