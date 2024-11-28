import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        
        <div className="res-card">
            <img alt="image here" className="res-img" src={RES_IMG_URL+resData.info.cloudinaryImageId}/>

            <h3>{resData.info.name}</h3>

            <ul className="res-rate-list">
                <li>{resData.info.avgRatingString}</li>
                <li>{resData.info.cuisines.join(", ")}</li>
                <li>{resData.info.costForTwo}</li>
                <li>{resData.info.sla.deliveryTime} minutes</li>
            </ul>
        </div>
    );
};
export default RestaurantCard;