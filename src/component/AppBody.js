import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const AppBody = () =>{
    
const [cleanedResList, setCleanedResList] = useState(resObj);
    return(
        <div className="body">
            <div className="search-bar-container">
                <p className="search-para">Food on your mind? Search here. </p>
                <input type="text" className="search"/>
                <button type="submit" className="submit-search">SEARCH</button>
                <div className="filter">
                    <button className="filter-top-res" onClick={() =>{
                        const fList = cleanedResList.filter(
                            (res) => res.info.avgRating>4.1
                        );
                        setCleanedResList(fList);
                    }}>Top Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {
                    cleanedResList.map((r)=>(
                        <RestaurantCard key={r.info.id} resData = {r}/>
                    ))
                }
            </div>
        </div>
    );
};

export default AppBody;