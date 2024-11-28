import { useState, useEffect } from "react";
import { RES_LIST } from "./constants";


const useRestListHk = () =>{

    const [cleanedResList,setCleanedResList] = useState([]);
    const [searchResList, setSearchResList] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch(RES_LIST);
        const jsoN = await data.json();
        setCleanedResList(jsoN?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchResList(jsoN?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    //need to gather the data from swiggy api

    return (cleanedResList,searchResList);
};

export default useRestListHk;