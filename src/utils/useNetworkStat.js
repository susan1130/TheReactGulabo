import { useState, useEffect } from "react";

const useNetworkStat = () =>{
    const [stat, setStat] = useState(true);
    useEffect( () =>{
        window.addEventListener("offline", () =>{
            setStat(false);
        });
        window.addEventListener("online", ()=>{
            setStat(true);
        });
    },[]);
    return stat;
};

export default useNetworkStat;