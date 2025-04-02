import { RES_IMG_URL } from "../utils/constants";

const AccordianList = ({items}) =>{
    return(
        <div>
           <div className="p-2 m-2">
                {items.map((i) =>(
                    <div key={i.card.info.id} className="border-b-2 flex justify-between">
                            <div className="w-9/12">
                                <div>
                                    <span className="text-violet-700">{i.card.info.name}</span>   
                                    <span className="text-violet-500 py-1 block">₹{(i.card.info.price || i.card.info.defaultPrice) /100}</span>   
                                </div>
                                <p className="pb-2 text-sm text-violet-800">{i.card.info.description} </p>
                            </div>    
                            <div className="p-4 w-3/12">
                                <div className="relative">
                                    {i.card.info.imageId ? 
                                        <img src={RES_IMG_URL+i.card.info.imageId} alt="Image here" className="w-full "/>
                                        :<div className="w-14 h-10 m-2 p-2"></div>}
                                    <button className="absolute bottom-0 right-1/3 p-1 bg-indigo-100 border-solid border-indigo-300 rounded-xl m-1 font-medium">ADD+</button>
                                </div>
                            </div>
                    </div>))}
           </div>
        </div>
    );
};

export default AccordianList;

{/*<img src={RES_IMG_URL+i.card.info.imageId} alt="Image here" className="w-full "/>
 */}

