import RestaurantCard, {withSomeLabel} from "./RestaurantCard";
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

const RestaurantCardWithSomeLabel = withSomeLabel(RestaurantCard);                                      

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
        <div className="body m-2 p-2 shadow-sm">
            <div className="search-bar-container flex m-2 p-2 shadow-sm">
                <p className="search-para px-2 ">Food on your mind? Search here. </p>
                <input type="text" className="search border border-solid border-violet-400 px-4 rounded-md hover:shadow-lg shadow-md focus:outline-none focus:ring focus:ring-violet-200" value=    {searchText} onChange={ (e) => {
                            setSearchText(e.target.value);
                        }}/>
                <button className="submit-search px-2 mx-4 bg-sky-50 shadow-md rounded-md hover:shadow-lg" onClick={
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
                
                <div className="filter px-4"> 
                    <button className="filter-top-res px-4 bg-sky-50 shadow-md rounded-md hover:shadow-lg" onClick={() =>{
                        const fList = cleanedResList.filter(
                            (res) => res.info.avgRating>4.1
                        );
                        setSearchResList(fList);
                        setFlag(true);
                    }}>Top Restaurants</button>
                </div>
            </div>
            <div className="res-container flex flex-wrap ">
                {
                    searchResList.map((r)=>(
                       <Link key={r.info.id} to={"/restaurants/"+ r.info.id}> 
                           {
                             r.info.isOpen ? 
                             (<RestaurantCardWithSomeLabel resData = {r}/>): 
                             (<RestaurantCard resData = {r}/>)
                           }
                             
                       </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AppBody;