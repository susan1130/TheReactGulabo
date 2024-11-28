
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenueHk from "../utils/useRestMenueHk";

const ResMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestMenueHk(resId);

    if (resInfo === null) return <Shimmer/> ;
        
    const { name, avgRatingString, costForTwoMessage, cuisines,  locality, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="indiv-restaurant">
            <h1 className="r-name">{name}</h1>
            <div className="rest-container"> 
                <div className="r-detail">
                    <p>{avgRatingString} stars</p>
                    <p className="dummy"></p>
                    <p>* {costForTwoMessage}</p>
                </div>
                    <p className="r-type">{cuisines.join(", ")}</p>
                
                <div className="res-loc">
                    <p>Outlet : {locality} </p>
                    <p> {sla?.slaString}</p>
                </div>
            </div>
            
            <div className="res-menu">
                <p className="menu-font">MENU</p>
                <ul className="menue-list">
                    {itemCards.map( i => 
                        <li className="menue-list-item" key={i.card?.info?.id}>
                            <p>{i?.card?.info?.name}</p>
                            <p>Rs. {i?.card?.info?.defaultPrice /100  || i?.card?.info?.price /100}</p>
                            <p>{i?.card?.info?.description ||i?.card?.info?.category}</p>
                            <hr/>
                        </li>)}

                </ul>
            </div>
        </div>
    );

};

export default ResMenu;