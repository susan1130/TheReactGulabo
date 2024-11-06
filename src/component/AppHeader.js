import { LOGO_URL } from "../utils/constants";


const styleCardCart = {
    height:"50px",
    width:"50px",
    margin:"5px",
    padding:"5px"
};

const AppHeader = () => {
    return(
        <div className="header">
            <div className="header-logo-container">
                <img alt="Logo here" className="logo" src={LOGO_URL}/>
            </div>
            <div className="head-nav-bar">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className="nav-cart-container">
                <img alt="cart here" className="nav-cart" style={styleCardCart} src="https://banner2.cleanpng.com/20180419/sfq/avf7f2ncu.webp" />
                <a href="#">CART</a>
            </div>
        </div>
    );
};

export default AppHeader;