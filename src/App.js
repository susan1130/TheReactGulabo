//document.getElementById("head1").innerHTML = "I changed the original contents here.";

import React from "react";
import ReactDOM from "react-dom/client";
import AppHeader from "./component/AppHeader";
import AppBody from "./component/AppBody";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./component/Error";
// import About from "./component/About";
import Contact from "./component/Contact";
import ResMenu from "./component/ResMenu";
//import Grocery from "./component/Grocery";

import { lazy, Suspense } from "react";
import Shimmer from "./component/Shimmer";

const Grocery = lazy( () => import("./component/Grocery"));
const About = lazy( () => import("./component/About"));

const AppLayout = () =>{
    return(
        <div className="app">
            <AppHeader/>
            <Outlet/>
        </div>
    );
};

const appRoute = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<AppBody/>,
            },{

                path:"/about",
                element:<Suspense fallback={<h1>Loading  ...</h1>}>
                    <About/>
                </Suspense>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}>
                        <Grocery/>
                    </Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<ResMenu/>
            }
        ],
        errorElement:<Error/>
    }
]);

const a = ReactDOM.createRoot(document.getElementById("div1"));
a.render(<RouterProvider router={appRoute}/>);



