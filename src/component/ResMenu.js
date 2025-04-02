
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenueHk from "../utils/useRestMenueHk";
import MenuCatagory from "./MenuCatagory";
import { useState } from "react";

const ResMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestMenueHk(resId);

    const [showIndex, setShowIndex] = useState(0);
    //const [flag, setFlag] = useState(false);      accordian flag

    if (resInfo === null) return <Shimmer/> ;
        
    const { name, avgRatingString, costForTwoMessage, cuisines,  locality, sla} = resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    //console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const category = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.
        ["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 
        );

    return (
        <div className="indiv-restaurant mx-24 px-24">
            <div className="m-10 py-1 shadow-inner rounded-3xl">
                <h1 className="r-name text-4xl mx-5 p-1 text-violet-700 font-bold">{name}</h1>
                <div className="rest-container p-5 m-5 my-0.5 text-lg rounded-3xl border border-slate-200 shadow-2xl"> 
                    <div className="r-detail  text-violet-600 text-sm">
                        <p>{avgRatingString} stars</p>
                        <p className="dummy"></p>
                        <p>* {costForTwoMessage}</p>
                    </div>
                        <p className="r-type text-violet-600 text-sm">{cuisines.join(", ")}</p>
                    
                    <div className="res-loc text-violet-600 text-xs">
                        <p>Outlet : {locality} </p>
                        <p> {sla?.slaString}</p>
                    </div>
                </div>
                <div className="m-1 p-1"></div>
            </div>
            
            <div className="res-menu">
                {/*category accordian*/}
                {category.map((c, index) => (
                    <MenuCatagory 
                        key = {c?.card?.card?.title} 
                        data = {c?.card?.card}
                        // showList={index===1 && true} this or the line below are similar
                        showList = {index === showIndex  ? true: false} 
                        setShowIndex = {() => setShowIndex(index)}
                        //setFlag = { () => setFlag(true)}
                    />
                ))}
            </div>   
        </div>
    );

};

export default ResMenu;

//  showList = {(index === showIndex && flag === true)  ? true: false}     for the problem of opening and closing the accordian
