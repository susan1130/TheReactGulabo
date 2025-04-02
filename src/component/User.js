import { useState } from "react";

const User = ({name}) => {

    const [fCount, setFCount] = useState(0);

    return(
        <div className="emp-card m-2 p-2 bg-orange-100">
            <h2>Name:{name}</h2>
            <h3>Contact: @ABCCrunchy</h3>
            <h4>Locality: India</h4>
            <button onClick={ () =>{
                let a = fCount+1;
                setFCount(a);
               }}
             className="p-2 m-2 bg-slate-50 rounded-lg"
            >
                Count : {fCount}</button>
        </div>
    )
};
export default User;