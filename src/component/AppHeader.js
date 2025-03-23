import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_LOGO } from "../utils/constants";
import useNetworkStat from "../utils/useNetworkStat";

// const styleCardCart = {
//     height:"50px",
//     width:"50px",
//     margin:"5px",
//     padding:"5px"
// };  style={styleCardCart} ... in the <img> tag

const AppHeader = () => {

    const [rBtnName, SetRBtnName] = useState("Login");
    const netStat = useNetworkStat();

    return(
        <div className="flex justify-between bg-sky-50 shadow-md m-2 px-2">
            <div>
                <img alt="Logo here" className="logo w-28 p-1" src={LOGO_URL}/>
            </div>
            <div>
                <ul className="flex items-center py-10">
                    <li className="px-4"><Link to="/">HOME</Link></li>
                    <li className="px-4"><Link to="/about">ABOUT US</Link></li>
                    <li className="px-4"><Link to="/contact">CONTACT US</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4">
                        <button className="log-btn" onClick={() =>{
                        rBtnName === "Login"
                            ? SetRBtnName("Logout")
                            :SetRBtnName("Login");
                            }
                        }>{rBtnName}</button>
                    </li>
                    <li className="net-stat px-4">Network Status: {netStat ? <p className="inline">&#9989;</p> :<p className="inline">&#x2B55;</p>}</li>
                </ul>
            </div>
            <div className="nav-cart-container">
                <img alt="cart here" className="nav-cart w-20 py-6" src={CART_LOGO} /> 
            </div>
        </div>
    );
};

export default AppHeader;