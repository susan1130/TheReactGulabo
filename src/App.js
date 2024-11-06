//document.getElementById("head1").innerHTML = "I changed the original contents here.";

import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./component/AppHeader";
import AppBody from "./component/AppBody";

const AppLayout = () =>{
    return(
        <div className="app">
            <AppHeader/>
            <AppBody/>
        </div>
    );
};

const a = ReactDOM.createRoot(document.getElementById("div1"));
a.render(<AppLayout/>);



