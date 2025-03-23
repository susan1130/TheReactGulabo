import { RES_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    return(
        
        <div className="res-card p-4 m-2 w-[200px] bg-indigo-50 shadow-inner rounded-lg hover:bg-indigo-200">
            <img alt="image here" className="res-img rounded-md h-[150px] w-[190px] " src={RES_IMG_URL+resData.info.cloudinaryImageId}/>

            <h3 className="font-bold py-2 text-blue-800 text-lg">{resData.info.name}</h3>

            <ul className="res-rate-list">
                <li>{resData.info.avgRatingString} stars</li>
                <li>{resData.info.cuisines.join(", ")}</li>
                <li>{resData.info.costForTwo}</li>
                <li>{resData.info.sla.deliveryTime} minutes</li>
            </ul>
        </div>
    );
};

//Higher order function

export const withSomeLabel = (RestaurantCard) =>{
    return (props) => {
        return (   
            <div>
                <div><label>promoted</label></div>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;


/**
 * Akshay had destructured the various parameters like
 * 
 * const RestaurantCard = (props) =>{
 *      const {resData} = props;
 * 
 *      const { cloudinaryImageId,
 *              name,
 *              avgRating,
 *              cuisines,
 *              costForTwo,
 *              sla.deliveryTime,
 *       } = resData?.info;                     // destructiong done on the fly.
 * 
 *      return(
 *      <img src={RES_IMG_URL+cloudinaryImageId}/>
 *      <h3>{name}</h3>
 *      <h3>{cuisines.join(", ")}</h3>
 *      <h3>{costForTwo}</h3>
 *      <h3>{avgRating}</h3>
 *      <h3>{sla.deliveryTime}</h3>
 *  );
 * };
 */