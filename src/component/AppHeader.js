import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CART_LOGO } from "../utils/constants";
import useNetworkStat from "../utils/useNetworkStat";

const styleCardCart = {
    height:"50px",
    width:"50px",
    margin:"5px",
    padding:"5px"
};

const AppHeader = () => {

    const [rBtnName, SetRBtnName] = useState("Login");
    const netStat = useNetworkStat();

    return(
        <div className="header">
            <div className="header-logo-container">
                <img alt="Logo here" className="logo" src={LOGO_URL}/>
            </div>
            <div className="head-nav-bar">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>
                        <button className="log-btn" onClick={() =>{
                        rBtnName === "Login"
                            ? SetRBtnName("Logout")
                            :SetRBtnName("Login");
                            }
                        }>{rBtnName}</button>
                    </li>
                    <li className="net-stat">Network Status: {netStat ? <p>&#9989;</p> :<p>&#x2B55;</p>}</li>
                </ul>
            </div>
            <div className="nav-cart-container">
                <img alt="cart here" className="nav-cart" style={styleCardCart} src={CART_LOGO} /> 
            </div>
        </div>
    );
};

export default AppHeader;