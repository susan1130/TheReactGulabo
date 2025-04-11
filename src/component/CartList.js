import { RES_IMG_URL } from "../utils/constants";

const CartList = ({items}) =>{

    return(
        <div>
           <div className="p-2 m-2">
                {items.map((i) =>(
                    <div key={i.card.info.id} className="border-b-2 p-2 m-2">
                            <div className="w-9/12 ">
                                <div className="flex justify-between">
                                    <div className="text-violet-700">{i.card.info.name}</div>
                                    <div className="text-violet-500 pl-10 ">₹{(i.card.info.price || i.card.info.defaultPrice) /100}</div>   
                                </div>
                            </div>    
                            
                    </div>))}
           </div>
        </div>
    );
};

export default CartList;