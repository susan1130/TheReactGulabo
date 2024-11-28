import { useState,useEffect } from "react"; 
import { MENUE_URL } from "./constants";

const useRestMenueHk = (resId) => {
    const [restMenue, setRestMenue] = useState(null);

    useEffect(() =>{
        fetchMenue();
    }, []);

    const fetchMenue = async () =>{
        const data = await fetch(MENUE_URL + resId);
        const jSOn = await data.json();
        setRestMenue(jSOn.data);
    }
    return restMenue;
};

export default useRestMenueHk;