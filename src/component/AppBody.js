import RestaurantCard from "./RestaurantCard";
import { RES_LIST } from "../utils/constants";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useNetworkStat from "../utils/useNetworkStat";

const AppBody = () =>{
    
const [cleanedResList, setCleanedResList] = useState([]);

const [searchText, setSearchText] = useState ("");
const [searchResList, setSearchResList] = useState([]);
// const [flag,setFlag] = useState(false);

useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() =>{
        const data = await fetch(RES_LIST);

        const jSon = await data.json();
        console.log(jSon);
        setCleanedResList(jSon?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchResList(jSon?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(cleanedResList);
    };

    // if(cleanedResList.length === 0){
    //     return <Shimmer/>;
    // }
    const onlineStat = useNetworkStat();
    if (onlineStat === false) return <h1>You are offline!!</h1>;

    return cleanedResList.length === 0 ? (
        <Shimmer/>
    ): (
        <div className="body">
            <div className="search-bar-container">
                <p className="search-para">Food on your mind? Search here. </p>
                <input type="text" className="search" value={searchText} onChange={ (e) => {
                            setSearchText(e.target.value);
                        }}/>
                <button className="submit-search" onClick={
                    () =>{
                        console.log(searchText);
                        console.log(searchResList);

                        const resSearch = cleanedResList.filter(
                            (r) =>r.info.name.toLowerCase().includes(searchText.toLowerCase())           
                        );
                        setSearchResList(resSearch);
                        setFlag(true);
                    }
                }>SEARCH</button>
                
                <div className="filter">
                    <button className="filter-top-res" onClick={() =>{
                        const fList = cleanedResList.filter(
                            (res) => res.info.avgRating>4.1
                        );
                        setSearchResList(fList);
                        setFlag(true);
                    }}>Top Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {
                    searchResList.map((r)=>(
                       <Link key={r.info.id} to={"/restaurants/"+ r.info.id}> 
                            <RestaurantCard resData = {r}/> 
                       </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AppBody;