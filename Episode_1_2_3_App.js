//document.getElementById("head1").innerHTML = "I changed the original contents here.";

import React from "react";
import ReactDOM from "react-dom/client";

const p1 = React.createElement("h1",{id:"header11"}, "GulaboShulabo Julabo *A*");  //this is a react element
//console.log(p1);

const sia = (<h1>Burn</h1>);        //this is also a react element
//console.log(sia);
///////////////////rendering the react element
const a = ReactDOM.createRoot(document.getElementById("div1"));
//a.render(sia);        // React element rendered
//////////////////// i can have 2 renders but the later one obliterates the contents of the 1st render

const Title = () => (           //this is a component written in shorthand
    <h2>Namaste Coffee</h2>
);

const Title1 = () =>{           //this is a component not in shorthand and with a return statement
    return <h3>More Coffee</h3>;
};

const Title2 = function(){      //using a normal function instead of an arrow function also works
    return(
        <h4>Another coffee</h4>
    );
};
//CAN WRITE ANY JAVASCRIPT CODE IN BETWEEN {} , a variable, some no etc etc and they get executed....MAGIC
const msg = "You owe me !!";
const HeadComp = () => (
    <div id="container">
        {p1}                
        {sia}
        {1000+90}
        <Title/>
        <Title1></Title1>
        {Title2()}
        {msg + " $100"}
        <p>Harpoon and a whale story</p>
    </div>
);
a.render(<HeadComp/>);
